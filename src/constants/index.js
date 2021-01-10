const BUTTONS_TEXT = {
  CREATE_NEW_CARD: '+ Create New Card',
  CREATE_NEW_DECK: '+ Create New Deck',
};

const MAIN_URL = 'http://localhost:5000/';

const URLS = {
  GET_DECKS: `${MAIN_URL}decks`,
  GET_CARDS: `${MAIN_URL}cards`,
  POST_DECK: `${MAIN_URL}decks/add`,
  POST_CARD: `${MAIN_URL}cards/add`,
  DELETE_DECK_BY_ID: `${MAIN_URL}decks/`,
  DELETE_CARD_BY_ID: `${MAIN_URL}cards/`,
  GET_DECK_BY_ID: `${MAIN_URL}decks/`,
  UPDATE_CARD_BY_ID: `${MAIN_URL}cards/update/`,
  UPDATE_DECK_BY_ID: `${MAIN_URL}decks/update/`,
  GET_CARDS_BY_IDS_ARR: `${MAIN_URL}cards/ids`,
  GET_DECKS_BY_IDS_ARR: `${MAIN_URL}decks/ids`,
  GET_USER_BY_ID: `${MAIN_URL}user/`,
  POST_USER: `${MAIN_URL}user/add`,
  DELETE_USER_BY_ID: `${MAIN_URL}user/`,
  UPDATE_USER_BY_ID: `${MAIN_URL}user/`,
};

export { BUTTONS_TEXT, URLS };
