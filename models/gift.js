const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//to save the images
const fs = require("fs");

const giftSchema = new Schema({
    gift: { type: String, required: true },
    img: { data: Buffer, contentType: String},
    isStar: { type: Boolean, default: false }
  });

  const Gift = mongoose.model("Gift", giftSchema);

  module.exports = Gift;