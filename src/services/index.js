import axios from 'axios';

const getDecks = async () => {
  const decks = await axios
    .get('http://localhost:5000/decks')
    .then((res) => res.data);
  return decks;
};

const getCards = async () => {
  const cards = await axios
    .get('http://localhost:5000/cards')
    .then((res) => res.data);
  return cards;
};

export { getDecks, getCards };
