const Post = require("../../models/feed/feedModel");
const User = require("../../models/auth/authModel");

exports.getPosts = (req, res, next) => {
  Post.find().then((result) => {
    res.status(200).json(result);
  });
};

exports.getSinglePost = async (req, res, next) => {
  const postId = req.params.postId.split(",");

  let posts = [];

  if (postId.length > 1) {
    for (let i = 0; i < postId.length; i++) {
      try {
        await Post.findById(postId[i]).then((post) => {
          posts.push(post);
        });
      } catch (error) {
        return res.status(404).json(error);
      }
    }
    res.status(200).json(posts);
  } else {
    Post.findById(postId[0]).then((result) => {
      res.status(200).json(result);
    });
  }
};

exports.addPost = (req, res, next) => {
  console.log(req.body.title);
  const title = req.body.title;
  const content = req.body.content;
  const userId = req.body.userId;

  const post = new Post({
    title: title,
    content: content,
    userId: userId,
  });

  let creator;

  post
    .save()
    .then((result) => {
      return User.findById(userId);
    })
    .then((user) => {
      creator = user;
      user.posts.push(post);
      return user.save();
    })
    .then((result) => {
      res.status(201).json({
        message: "post created",
        post: post,
        user: { _id: creator._id, name: creator.name },
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.editPost = (req, res, next) => {
  const postId = req.params.postId;
  const userId = req.params.userId;
  const title = req.body.title;
  const content = req.body.content;

  Post.findById(postId).then((post) => {
    if (!post) {
      res.status(404).json({
        error: "could not find post",
      });
    }
    if (userId !== post.userId.toString()) {
      res.status(403).json({
        error: "not authorized",
      });
    }
    return Post.findByIdAndUpdate(postId, { title: title, content: content })
      .then((result) => {
        return User.findById(userId);
      })
      .then((result) => {
        res.status(200).json({
          message: "post edited",
        });
      });
  });
};

exports.deletePost = (req, res, next) => {
  const postId = req.params.postId;
  const userId = req.params.userId;

  Post.findById(postId).then((post) => {
    if (!post) {
      res.status(404).json({
        error: "could not find post",
      });
    }
    if (userId !== post.userId.toString()) {
      res.status(403).json({
        error: "not authorized",
      });
    }
    return Post.findByIdAndRemove(postId)
      .then((result) => {
        return User.findById(userId);
      })
      .then((user) => {
        user.posts.pull(postId);
        return user.save();
      })
      .then((result) => {
        res.status(200).json({
          message: "post deleted",
        });
      });
  });
};

exports.getSingleComment = async (req, res, next) => {
  const postId = req.params.postId;
  const commentId = req.params.commentId;

  const post = await Post.findById(postId);
  const comment = post.comments.find((comment) => {
    return comment._id.toString() === commentId;
  });

  res.status(200).json({
    comment,
  });
};

exports.addComment = (req, res, next) => {
  const postId = req.params.postId;
  const userId = req.body.userId;
  const content = req.body.content;

  const comment = {
    userId: userId,
    content: content,
  };

  Post.findById(postId).then((post) => {
    if (!post) {
      res.status(404).json({
        error: "could not find post",
      });
    }
    post.comments.push(comment);
    return post
      .save()
      .then((result) => {
        res.status(201).json({
          message: "comment created",
          comment: comment,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

exports.editComment = async (req, res, next) => {
  const postId = req.params.postId;
  const commentId = req.params.commentId;
  const content = req.body.content;

  console.log(postId, commentId, content);

  const post = await Post.findById(postId);
  post.comments.forEach((comment) => {
    if (comment._id.toString() === commentId) {
      return (comment.content = content);
    }
  });

  post.save();

  res.status(200).json({
    message: "done",
  });
};
