const express = require("express");
const router = express.Router();
const feedControllers = require("../../controllers/feed/feedControllers");
const isAuth = require("../../middleware/is-auth");

router.get("/posts", isAuth, feedControllers.getPosts);

router.get("/posts/:postId", isAuth, feedControllers.getSinglePost);

router.post("/posts/add", isAuth, feedControllers.addPost);

router.delete(
  "/posts/delete/:postId/:userId",
  isAuth,
  feedControllers.deletePost
);

router.put("/posts/edit/:postId/:userId", isAuth, feedControllers.editPost);

module.exports = router;
