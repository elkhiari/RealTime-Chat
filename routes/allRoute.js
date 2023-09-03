const app = require("express")();
const authRoutes = require("./auth.route");
const userRoutes = require("./user.route");

app.use("/auth", authRoutes);
app.use("/user", userRoutes);

module.exports = app;
