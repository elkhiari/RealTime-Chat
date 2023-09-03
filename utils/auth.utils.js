const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "1d" });
};

const verifyToken = (token) => {
  return jwt.verify(token, process.env.SECRET);
};

module.exports = { createToken, verifyToken };
