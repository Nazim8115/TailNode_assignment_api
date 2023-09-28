const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  user_id: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  imageUrl: {
    type: String,
    require: true,
  },
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
