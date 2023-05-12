const express = require("express");
const router = express.Router();
const feedControllers = require("../../controllers/feed/feedControllers");
const isAuth = require("../../middleware/is-auth");

router.get("/posts", isAuth, feedControllers.getPosts);

router.get("/posts/:postId", isAuth, feedControllers.getSinglePost);

router.post("/posts/add", isAuth, feedControllers.addPost);

router.post("/posts/:postId/comments", isAuth, feedControllers.addComment);

router.delete(
  "/posts/delete/:postId/:userId",
  isAuth,
  feedControllers.deletePost
);

router.put("/posts/edit/:postId/:userId", isAuth, feedControllers.editPost);

router.get(
  "/:postId/comments/:commentId",
  isAuth,
  feedControllers.getSingleComment
);

router.put("/:postId/comments/:commentId", isAuth, feedControllers.editComment);

module.exports = router;
