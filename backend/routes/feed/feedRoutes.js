const express = require("express");
const router = express.Router();
// const path = require("path");
// const rootDir = require("../../utils/path");
const feedControllers = require("../../controllers/feed/feedControllers");

router.get("/posts", feedControllers.getPosts);

router.get("/post/:postId", feedControllers.getSinglePost);

router.post("/post", feedControllers.addPost);

module.exports = router;
