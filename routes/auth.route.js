const authRoutes = require("express").Router();
const authController = require("../controllers/auth.controller");

const {
  checkCardinality,
  checkUsername,
  checkEmail,
  checkPassword,
} = require("../middlewares/register.middleware");

authRoutes.route("/login").post(authController.Login);
authRoutes
  .route("/register")
  .post(
    checkCardinality,
    checkUsername,
    checkEmail,
    checkPassword,
    authController.Register
  );

module.exports = authRoutes;
