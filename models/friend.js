const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//to save the images
const fs = require("fs");

const friendSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String },
  img: { data: Buffer, contentType: String},
  date: { type: Date, default: Date.now }, //need this?
  isFavorite: { type: Boolean, default: false },
  gifts: [{ type: Schema.Types.ObjectId, ref: 'Gift' }],
  occasions: [{ type: Schema.Types.ObjectId, ref: 'Occasion' }]
});

const Friend = mongoose.model("Friend", friendSchema);

module.exports = Friend;

//storing images in mongo/mongoose
//https://stackoverflow.com/questions/29780733/store-an-image-in-mongodb-using-node-js-express-and-mongoose