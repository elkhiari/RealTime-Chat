const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      minlength: 3,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    profilePicture: {
      type: String,
      required: false,
      trim: true,
      default:
        "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg",
    },
    onlineStatus: {
      type: Boolean,
      required: true,
      default: false,
    },
    lastActive: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
