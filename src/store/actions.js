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
  CHANGE_CREATE_DECK_VISIBLE: 'CHANGE_CREATE_DECK_VISIBLE',
  CHANGE_CREATE_CARD_VISIBLE: 'CHANGE_CREATE_CARD_VISIBLE',
  CHANGE_SELECTED_DECKS: 'CHANGE_SELECTED_DECKS',
  CHANGE_EDIT_CARD_VISIBLE: 'CHANGE_EDIT_CARD_VISIBLE',
  INIT_USER: 'INIT_USER',
  GET_USER_SUCCESS: 'GET_USER_SUCCESS',
  GET_USER_FAIL: 'GET_USER_FAIL',
  ADD_USER: 'ADD_USER',
  UPDATE_USER: 'UPDATE_USER',
  DELETE_USER: 'DELETE_USER',
  USER_LOGIN: 'USER_LOGIN',
  USER_LOGOUT: 'USER_LOGOUT',
};

export const actionCreator = {
  initUser: (data) => ({ type: actionTypes.INIT_USER, data }), //data - user id
  addUser: (data) => ({ type: actionTypes.ADD_USER, data }), //data - user obj
  updateUser: (data) => ({ type: actionTypes.UPDATE_USER, data }), //data - arr [0] - id, [1] - user obj
  deleteUser: (data) => ({ type: actionTypes.DELETE_USER, data }), //data - user id
  initDecks: () => ({ type: actionTypes.INIT_DECKS }),
  addDeck: (data) => ({ type: actionTypes.ADD_DECK, data }), //data - deck obj
  updateDeck: (data) => ({ type: actionTypes.UPDATE_DECK, data }), //data - arr [0] - id, [1] - deck obj
  deleteDeck: (data) => ({ type: actionTypes.DELETE_DECK, data }), //data - deck id
  initCards: () => ({ type: actionTypes.INIT_CARDS }),
  addCard: (data) => ({ type: actionTypes.ADD_CARD, data }), //data - card obj
  updateCard: (data) => ({ type: actionTypes.UPDATE_CARD, data }), //data - arr [0] - id, [1] - card obj
  deleteCard: (data) => ({ type: actionTypes.DELETE_CARD, data }), //data - card id
  changeCreateDeckModalVisible: (data) => ({
    type: actionTypes.CHANGE_CREATE_DECK_VISIBLE,
    data,
  }), //data - boolean
  changeCreateCardModalVisible: (data) => ({
    type: actionTypes.CHANGE_CREATE_CARD_VISIBLE,
    data,
  }),
  changeSelectedDecks: (data) => ({
    type: actionTypes.CHANGE_SELECTED_DECKS,
    data,
  }), //data - array of selected decks id's
  changeEditCardVisible: (data) => ({
    type: actionTypes.CHANGE_EDIT_CARD_VISIBLE,
    data,
  }),
  userLogin: (data) => ({
    type: actionTypes.USER_LOGIN,
    data,
  }),
  userLogout: () => ({ type: actionTypes.USER_LOGOUT }),
};
