const mongoose = require("mongoose");

const NotificationSchema = mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    type: {
      type: String,
      enum: [
        "FriendRequest",
        "FriendRequestAccepted",
        "FriendRequestDeclined",
        "Message",
      ],
      required: true,
      trim: true,
      lowercase: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    seen: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Notification", NotificationSchema);
