const Post = require("../../models/feed/feedModel");

exports.getPosts = (req, res, next) => {
  Post.find().then((result) => {
    res.status(200).json(result);
  });
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
};

exports.getSinglePost = (req, res, next) => {
  const postId = req.params.postId;
  Post.findById(postId).then((result) => {
    console.log(result);
    res.status(200).json(result);
  });
};

exports.addPost = (req, res, next) => {
  console.log(req.body);
  //  res.sendFile(path.join(rootDir, "views", "add-product.html"));
  const title = req.body.title;
  const content = req.body.content;

  const post = new Post({
    title: title,
    content: content,
    creator: { name: "hmz" },
  });
  post
    .save()
    .then((result) => {
      res.status(201).json({
        message: "post created",
        post: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
