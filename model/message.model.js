const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema(
  {
    Sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    Chat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chat",
      required: true,
    },
    Content: {
      type: String,
      required: true,
      trim: true,
    },
    SeenBy: {
      type: Array,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Message", MessageSchema);
