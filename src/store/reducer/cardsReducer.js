import { actionTypes } from '../actions';

const initialState = {
  cards: [],
  userCards: [],
};

export default function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_USER_CARDS_SUCCESS: {
      return {
        ...state,
        userCards: action.data,
      };
    }
    case actionTypes.GET_USER_DECKS_FAIL: {
      return {
        ...state,
        userCards: [],
      };
    }
    case actionTypes.GET_CARDS_SUCCESS: {
      return {
        ...state,
        cards: action.data,
      };
    }
    case actionTypes.GET_CARDS_FAIL: {
      return {
        ...state,
        cards: [],
      };
    }

    default:
      return state;
  }
}
