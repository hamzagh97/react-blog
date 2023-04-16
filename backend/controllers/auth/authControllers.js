const User = require("../../models/auth/authModel");

// const { body } = require("express-validator/check");

exports.register = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = new User({
    email: email,
    password: password,
  });
  user
    .save()
    .then((result) => {
      res.status(201).json({
        message: "registered",
        user: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  res.status(200).json({
    message: "logged in",
    user: { email: email, password: password },
    idToken: "123123",
  });
};
