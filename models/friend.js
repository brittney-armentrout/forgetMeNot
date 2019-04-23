const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//to save the images
const fs = require("fs");

const friendSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  img: { data: Buffer, contentType: String},
  date: { type: Date, default: Date.now },
  isFavorite: { type: Boolean, default: false }
  //will need to associate occasions and gifts in here somehow
});

const Friend = mongoose.model("Friend", friendSchema);

module.exports = Friend;

//storing images in mongo/mongoose
//https://stackoverflow.com/questions/29780733/store-an-image-in-mongodb-using-node-js-express-and-mongoose