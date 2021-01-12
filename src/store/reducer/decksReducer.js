import { actionTypes } from '../actions';

const initialState = {
  decks: [],
  userDecks: [],
};

export default function decksReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_USER_DECKS_SUCCESS: {
      return {
        ...state,
        userDecks: action.data,
      };
    }
    case actionTypes.GET_USER_DECKS_FAIL: {
      return {
        ...state,
        userDecks: [],
      };
    }
    case actionTypes.GET_DECKS_SUCCESS: {
      return {
        ...state,
        decks: action.data,
      };
    }
    case actionTypes.GET_DECKS_FAIL: {
      return {
        ...state,
        decks: [],
      };
    }
    default:
      return state;
  }
}
