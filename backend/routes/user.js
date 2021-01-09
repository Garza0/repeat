const router = require('express').Router();
let User = require('../models/user.model');

router.route('/add').post((req, res) => {
  const _id = req.body._id;
  const name = req.body.name;
  const avatar = req.body.avatar;
  const cards = req.body.cards;
  const decks = req.body.decks;

  const newUser = new User({
    _id,
    name,
    avatar,
    cards,
    decks,
  });

  newUser
    .save()
    .then(() => res.json('User added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((user) => res.json('User deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').put((req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      user._id = req.body._id;
      user.name = req.body.name;
      user.avatar = req.body.avatar;
      user.cards = req.body.cards;
      user.decks = req.body.decks;

      user
        .save()
        .then(() => res.json('User updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
