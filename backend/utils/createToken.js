const jwt = require("jsonwebtoken");

const createToken = (payload) =>
  jwt.sign({ userId: payload }, "foo", {
    expiresIn: 60 * 60,
  });

module.exports = createToken;
