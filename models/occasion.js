const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//to save the images
const fs = require("fs");

const occasionSchema = new Schema({
    type: { type: String, required: true },
    date: { type: Date, default: Date.now }
  });

  const Occasion = mongoose.model("Occasion", occasionSchema);

  module.exports = Occasion;