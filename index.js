const express = require("express");
const app = express();
const server = require("http").createServer(app);
const cors = require("cors");
const allRoutes = require("./routes/allRoute");
const connect = require("./db/db.config");
require("dotenv").config();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use("/api/v1", allRoutes);

const startServer = async () => {
  try {
    await connect();
    server.listen(port, () => {
      console.log(`\x1b[31mServer running on port ${port}\x1b[0m`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
