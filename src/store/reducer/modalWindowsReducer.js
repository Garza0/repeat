import { actionTypes } from '../actions';

const initialState = {
  createDeckVisibility: false,
};

export default function modalWindowsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CREATE_DECK_VISIBLE: {
      return {
        ...state,
        createDeckVisibility: action.data,
      };
    }

    default:
      return state;
  }
}
