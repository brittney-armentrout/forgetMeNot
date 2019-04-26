const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  userID: { type: String, required: true }
});

const User = mongoose.model('user', userSchema);

module.exports = User;