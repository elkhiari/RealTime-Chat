const userModel = require("../model/user.model");

const getMe = async (req, res) => {
  try {
    const { id } = req.user;
    const user = await userModel.findById(id);
    if (!user) return res.status(404).json({ message: "user not found" });
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = userModel.findById(id);
    if (!user) return res.status(404).json({ message: "user not found" });
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email, profilePicture } = req.body;
    const user = await userModel.findById(id);
    if (!user) return res.status(404).json({ message: "user not found" });
    user.username = username;
    user.email = email;
    user.profilePicture = profilePicture;
    await user.save();
    return res.status(200).json({ message: "user updated successfully" });
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findById(id);
    if (!user) return res.status(404).json({ message: "user not found" });
    await user.delete();
    return res.status(200).json({ message: "user deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
};

const searchUsers = async (req, res) => {
  try {
    const { username } = req.params;
    const users = await userModel.find({
      username: { $regex: username, $options: "i" },
    });
    if (!users) return res.status(404).json({ message: "user not found" });
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
};

module.exports = { getUser, updateUser, deleteUser, searchUsers, getMe };
