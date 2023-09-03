const jwt = require("jsonwebtoken");
const userModel = require("../model/user.model");

const checkToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) return res.status(401).json({ message: "missing token" });
    const decoded = jwt.verify(token, process.env.SECRET);
    const user = await userModel.findById(decoded._id);
    if (!user) return res.status(401).json({ message: "invalid token" });
    req.user = user;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError")
      return res.status(401).json({ message: "token expired" });
    else if (error.name === "JsonWebTokenError")
      return res.status(401).json({ message: "invalid token" });
    else return res.status(500).json({ message: "internal server error" });
  }
};

module.exports = { checkToken };
