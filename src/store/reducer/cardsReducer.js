import { actionTypes } from '../actions';

const initialState = {
  cards: [],
};

export default function cardsReducer(state = initialState, action) {
  switch (action.type) {
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
