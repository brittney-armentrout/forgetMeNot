const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//to save the images
const fs = require("fs");

const friendSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  img: { data: Buffer, contentType: String},
  date: { type: Date, default: Date.now },
  isFavorite: { type: Boolean, default: false },
  gifts: [{ type: Schema.Types.ObjectId, ref: 'Gift' }],
  occasions: [{ type: Schema.Types.ObjectId, ref: 'Occasion' }]
});

const giftSchema = new Schema({
  gift: { type: String, required: true },
  img: { data: Buffer, contentType: String},
  isStar: { type: Boolean, default: false }
});

const occasionSchema = new Schema({
  type: { type: String, required: true },
  date: { type: Date, default: Date.now }
});


const Friend = mongoose.model("Friend", friendSchema);
const Gift = mongoose.model("Gift", giftSchema);
const Occasion = mongoose.model("Friend", occasionSchema);

module.exports = Friend;
module.exports = Gift;
module.exports = Occasion;

//storing images in mongo/mongoose
//https://stackoverflow.com/questions/29780733/store-an-image-in-mongodb-using-node-js-express-and-mongoose