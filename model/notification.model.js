const mongoose = require("mongoose");

const NotificationSchema = mongoose.Schema(
  {
    Sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    Receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    Type: {
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
    Content: {
      type: String,
      required: true,
      trim: true,
    },
    Seen: {
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
