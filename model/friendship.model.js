const mongoose = require("mongoose");

const FriendshipSchema = mongoose.Schema(
  {
    user1: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    user2: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Accepted", "Declined"],
      required: true,
      trim: true,
      lowercase: true,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Friendship", FriendshipSchema);
