import axios from 'axios';
import { URLS } from '../constants';

const {
  GET_DECKS,
  GET_CARDS,
  POST_DECK,
  POST_CARD,
  DELETE_DECK_BY_ID,
  DELETE_CARD_BY_ID,
  GET_DECK_BY_ID,
  UPDATE_CARD_BY_ID,
  UPDATE_DECK_BY_ID,
  GET_CARDS_BY_IDS_ARR,
} = URLS;

const getDecks = async () => {
  const decks = await axios.get(GET_DECKS).then((res) => res.data);
  return decks;
};

const getCards = async () => {
  const cards = await axios.get(GET_CARDS).then((res) => res.data);
  return cards;
};

const getCardsByIdsArr = async (idsArr) => {
  const cards = await axios
    .get(GET_CARDS_BY_IDS_ARR, {
      params: { ids: idsArr },
    })
    .then((res) => res.data);
  return cards;
};

const postDeck = async (deck) => {
  const rawResponse = await axios.post(POST_DECK, deck).then((res) => res.data);
  return rawResponse;
};

const postCard = async (card) => {
  const rawResponse = await axios.post(POST_CARD, card).then((res) => res.data);
  return rawResponse;
};

const deleteDeck = async (deckId) => {
  const rawResponse = await axios
    .delete(DELETE_DECK_BY_ID + deckId)
    .then((res) => res.data);
  return rawResponse;
};

const deleteCard = async (cardId) => {
  const rawResponse = await axios
    .delete(DELETE_CARD_BY_ID + cardId)
    .then((res) => res.data);
  return rawResponse;
};

const getDeckById = async (deckId) => {
  const deck = await axios.get(GET_DECK_BY_ID + deckId).then((res) => res.data);
  return deck;
};

const updateCardById = async (cardId, cardForUpdate) => {
  const rawResponse = await axios
    .put(UPDATE_CARD_BY_ID + cardId, cardForUpdate)
    .then((res) => res.data);
  return rawResponse;
};

const updateDeckById = async (deckId, deckForUpdate) => {
  const rawResponse = await axios
    .put(UPDATE_DECK_BY_ID + deckId, deckForUpdate)
    .then((res) => res.data);
  return rawResponse;
};

export {
  getDecks,
  getCards,
  postDeck,
  postCard,
  deleteDeck,
  deleteCard,
  getDeckById,
  updateCardById,
  updateDeckById,
  getCardsByIdsArr,
};
