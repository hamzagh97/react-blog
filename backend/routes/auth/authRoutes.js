const express = require("express");
const router = express.Router();
const authControllers = require("../../controllers/auth/authControllers");

router.put("/register", authControllers.register);
router.post("/login", authControllers.login);
// router.post("/login", authControllers.login);

module.exports = router;
