const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const userController = require("./controllers/userController.js");
const port = process.env.PORT || 8001;
const app = express();

// database connection
mongoose.connect("mongodb://127.0.0.1:27017/tailNodeData").then((e) => {
  console.log("database connected!");
});

app.use("/get-users", userController.getUsers);
app.use("/post-data", userController.postUsers);

app.get("/", async (req, res) => {
  res.send("get request");
});

app.listen(port, () => {
  console.log("server is running at port :", port);
});
