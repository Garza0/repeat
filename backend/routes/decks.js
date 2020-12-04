const router = require('express').Router();
let Deck = require('../models/deck.model');

router.route('/').get((req, res) => {
  Deck.find()
    .then((deck) => res.json(deck))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const description = req.body.description;
  const cards = req.body.cards;
  const date = Date.parse(req.body.date);

  const newDeck = new Deck({
    description,
    cards,
    date,
  });

  newDeck
    .save()
    .then(() => res.json('Deck added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Deck.findById(req.params.id)
    .then((deck) => res.json(deck))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Deck.findByIdAndDelete(req.params.id)
    .then((deck) => res.json('Deck deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Deck.findById(req.params.id)
    .then((deck) => {
      deck.description = req.body.description;
      deck.cards = req.body.cards;
      deck.date = Date.parse(req.body.date);

      deck
        .save()
        .then(() => res.json('Deck updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
