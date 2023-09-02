const mongoose = require("mongoose");

const ChatSchema = mongoose.Schema(
  {
    ChatName: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      minlength: 3,
      lowercase: true,
    },
    chatType: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    ListOfParticipants: {
      type: Array,
      required: true,
      trim: true,
    },
    ChatAvatar: {
      type: String,
      required: false,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Chat", ChatSchema);
