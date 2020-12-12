import { actionTypes } from '../actions';

const initialState = {
  decks: [],
};

export default function decksReducer(state = initialState, action) {
  switch (action.type) {
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
