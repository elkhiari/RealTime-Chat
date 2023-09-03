const bcrypt = require("bcrypt");
const userModel = require("../model/user.model");
const { createToken } = require("../utils/auth.utils");

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) return res.status(401).json({ message: "user not found" });
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch)
      return res.status(401).json({ message: "incorrect password" });
    return res.status(200).json({
      message: "user logged in successfully",
      token: createToken(user._id),
    });
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
};

const Register = async (req, res) => {
  try {
    const { username, email, password, profilePicture } = req.body;
    const user = new userModel({
      username,
      email,
      password: await bcrypt.hash(password, 10),
      profilePicture,
    });
    await user.save();
    return res.status(201).json({ message: "user created successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "internal server error" });
  }
};

module.exports = { Login, Register };
