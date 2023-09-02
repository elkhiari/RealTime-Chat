const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    Username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      minlength: 3,
      lowercase: true,
    },
    Password: {
      type: String,
      required: true,
      trim: true,
    },
    Email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    ProfilePicture: {
      type: String,
      required: false,
      trim: true,
      default:
        "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg",
    },
    OnlineStatus: {
      type: Boolean,
      required: true,
      default: false,
    },
    LastActive: {
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
