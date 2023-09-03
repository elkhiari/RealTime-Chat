const userModel = require("../model/user.model");

const checkCardinality = (req, res, next) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: "missing required field" });
  }
  next();
};

const checkUsername = async (req, res, next) => {
  const { username } = req.body;
  usernameRegex = /^[a-zA-Z0-9]+$/;
  if (!usernameRegex.test(username) || username.length < 3) {
    return res.status(400).json({
      message: "username contains invalid characters or is too short",
    });
  }
  const usernameExist = await userModel.findOne({ username });
  if (usernameExist)
    return res.status(400).json({ message: "username already exists" });
  next();
};

const checkEmail = async (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email))
    return res.status(400).json({ message: "email is invalid" });
  const userExist = await userModel.findOne({ email });
  if (userExist) {
    return res.status(400).json({ message: "email already exists" });
  }
  next();
};

const checkPassword = (req, res, next) => {
  const { password, email, username } = req.body;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  if (!passwordRegex.test(password)) {
    return res.status(400).json({
      message:
        "Password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 number",
    });
  }

  if (password.includes(username) || password.includes(email.split("@")[0])) {
    return res.status(400).json({
      message:
        "Password cannot contain your username or the first part of your email",
    });
  }

  next();
};

module.exports = {
  checkCardinality,
  checkUsername,
  checkEmail,
  checkPassword,
};
