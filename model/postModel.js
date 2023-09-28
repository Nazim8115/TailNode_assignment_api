const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  data: [],
  total: {
    type: Number,
  },
  page: {
    type: Number,
  },
  limit: {
    type: Number,
  },
});
const postmodel = mongoose.model("post", postSchema);
module.exports = postmodel;
