const mongoose = require("mongoose");

const FriendshipSchema = mongoose.Schema(
  {
    User1: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    User2: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    Status: {
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
