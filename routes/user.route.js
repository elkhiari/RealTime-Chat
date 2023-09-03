const userRoutes = require("express").Router();
const userController = require("../controllers/user.controller");
const { checkToken } = require("../middlewares/auth.middleware");
const { isMe } = require("../middlewares/user.middleware");

userRoutes.use(checkToken);

userRoutes
  .route("/:id")
  .get(userController.getUser)
  .put(isMe, userController.updateUser)
  .delete(isMe, userController.deleteUser);
userRoutes.route("/me").get(userController.getMe);
userRoutes.route("/search/:username").get(userController.searchUsers);

module.exports = userRoutes;
