const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const deckSchema = new Schema(
  {
    description: { type: String, required: true },
    cards: { type: Array, default: Date.now },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const Deck = mongoose.model('Deck', deckSchema);

module.exports = Deck;
