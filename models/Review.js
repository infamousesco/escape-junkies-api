const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  reviewBody: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Reviews", ReviewSchema);
