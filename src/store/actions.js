export const actionTypes = {
  INIT_DECKS: 'INIT_DECKS',
  GET_DECKS_SUCCESS: 'GET_DECKS_SUCCESS',
  GET_DECKS_FAIL: 'GET_DECKS_FAIL',
  ADD_DECK: 'ADD_DECK',
  UPDATE_DECK: 'UPDATE_DECK',
  DELETE_DECK: 'DELETE_DECK',
  INIT_CARDS: 'INIT_CARDS',
  GET_CARDS_SUCCESS: 'GET_CARDS_SUCCESS',
  GET_CARDS_FAIL: 'GET_CARDS_FAIL',
  ADD_CARD: 'ADD_CARD',
  UPDATE_CARD: 'UPDATE_CARD',
  DELETE_CARD: 'DELETE_CARD',
};

export const actionCreator = {
  initDecks: () => ({ type: actionTypes.INIT_DECKS }),
  addDeck: (data) => ({ type: actionTypes.ADD_DECK, data }), //data - deck obj
  updateDeck: (data) => ({ type: actionTypes.UPDATE_DECK, data }), //data - arr [0] - id, [1] - deck obj
  deleteDeck: (data) => ({ type: actionTypes.DELETE_DECK, data }), //data - deck id
  initCards: () => ({ type: actionTypes.INIT_CARDS }),
  addCard: (data) => ({ type: actionTypes.ADD_CARD, data }), //data - card obj
  updateCard: (data) => ({ type: actionTypes.UPDATE_CARD, data }), //data - arr [0] - id, [1] - card obj
  deleteCard: (data) => ({ type: actionTypes.DELETE_CARD, data }), //data - card id
};
