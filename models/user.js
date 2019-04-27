const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  userID: { type: String, required: true },
  friends: [{ type: Schema.Types.ObjectId, ref: 'Friend' }], 
});

const User = mongoose.model('User', userSchema);

module.exports = User;