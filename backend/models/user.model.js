const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    _id: { type: String, required: true },
    name: { type: String, required: true },
    avatar: { type: String },
    cards: { type: Array },
    decks: { type: Array },
  },
  {
    timestamps: true,
    _id: false,
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
