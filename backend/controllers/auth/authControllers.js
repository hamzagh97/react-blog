const User = require("../../models/auth/authModel");
const createToken = require("../../utils/createToken");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

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

exports.login = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  await User.findOne({ email: email })
    .then((user) => {
      if (!user || !(password === user.password)) {
        return res.status(404).json({ error: "user not found" });
      } else {
        const token = createToken(user._id);
        delete user._doc.password;

        return res.status(200).json({ data: user, token });
      }
    })
    .catch((error) => {
      return json({ error: error });
    });
};
