import { actionTypes } from '../actions';

const initialState = {
  createDeckVisibility: false,
  createCardVisibility: false,
  selectedDecks: [],
  editCardVisibility: false,
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
    case actionTypes.CHANGE_SELECTED_DECKS: {
      return {
        ...state,
        selectedDecks: action.data,
      };
    }
    case actionTypes.CHANGE_EDIT_CARD_VISIBLE: {
      return {
        ...state,
        editCardVisibility: action.data,
      };
    }

    default:
      return state;
  }
}
