const isMe = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (id !== req.user._id)
      return res.status(401).json({ message: "unauthorized" });
    next();
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
};

module.exports = { isMe };
