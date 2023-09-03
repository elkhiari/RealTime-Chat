const mongoose = require("mongoose");
require("dotenv").config();

// const dbConfig = {
//   url: process.env.MONGODB_URI,
//   options: {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
// };

const connect = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("\x1b[35mMongoDB connected...\x1b[0m"))
    .catch((err) => console.log("Error connecting to MongoDB :", err));
};

module.exports = connect;
