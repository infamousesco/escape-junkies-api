const mongoose = require("mongoose");

const MusingSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  musingBody: {
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

module.exports = mongoose.model("Musings", MusingSchema);
