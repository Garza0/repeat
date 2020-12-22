import { actionTypes } from '../actions';

const initialState = {
  createDeckVisibility: false,
  createCardVisibility: false,
};

export default function modalWindowsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CREATE_DECK_VISIBLE: {
      return {
        ...state,
        createDeckVisibility: action.data,
      };
    }
    case actionTypes.CHANGE_CREATE_CARD_VISIBLE: {
      return {
        ...state,
        createCardVisibility: action.data,
      };
    }

    default:
      return state;
  }
}
