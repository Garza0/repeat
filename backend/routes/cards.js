const router = require('express').Router();
let Card = require('../models/card.model');

router.route('/').get((req, res) => {
  Card.find()
    .then((card) => res.json(card))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const front = req.body.front;
  const back = req.body.back;
  const date = Date.parse(req.body.date);
  const nextShow = req.body.nextShow;
  const decks = req.body.decks;
  const showDates = req.body.showDates;
  const learnLevel = req.body.learnLevel;

  const newCard = new Card({
    date,
    front,
    back,
    nextShow,
    decks,
    showDates,
    learnLevel,
  });

  newCard
    .save()
    .then(() => res.json('Card added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Card.findById(req.params.id)
    .then((card) => res.json(card))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Card.findByIdAndDelete(req.params.id)
    .then((card) => res.json('Card deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').put((req, res) => {
  Card.findById(req.params.id)
    .then((card) => {
      card.front = req.body.front;
      card.back = req.body.back;
      card.date = Date.parse(req.body.date);
      card.nextShow = req.body.nextShow;
      card.decks = req.body.decks;
      card.showDates = req.body.showDates;
      card.learnLevel = req.body.learnLevel;

      card
        .save()
        .then(() => res.json('Card updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
