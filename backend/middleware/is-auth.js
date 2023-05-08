const jwt = require("jsonwebtoken");
const User = require("../models/auth/authModel");

module.exports = (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    return res.status(401).json({ error: "Not authenticated." });
  }

  const token = authHeader.split(" ")[1];
  const decodedToken = jwt.verify(token, "foo");

  if (!decodedToken) {
    return res.status(401).json({ error: "Not authenticated." });
  }

  next();
};
