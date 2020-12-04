const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cardSchema = new Schema(
  {
    front: { type: String, value: String },
    back: { type: String, value: String },
    date: { type: Date, required: true },
    nextShow: Date,
    decks: Array,
    showDates: Array,
    learnLevel: Number,
  },
  {
    timestamps: true,
  }
);

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
