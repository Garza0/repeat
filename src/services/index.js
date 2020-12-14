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

const postDeck = async (deck) => {
  const rawResponse = await axios
    .post('http://localhost:5000/decks/add', deck)
    .then((res) => res.data);
  return rawResponse;
};

const postCard = async (card) => {
  const rawResponse = await axios
    .post('http://localhost:5000/cards/add', card)
    .then((res) => res.data);
  return rawResponse;
};

export { getDecks, getCards, postDeck, postCard };
