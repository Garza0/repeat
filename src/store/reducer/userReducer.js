import { actionTypes } from '../actions';

const initialState = {
  user: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.USER_LOGIN: {
      return {
        ...state,
        user: action.data,
      };
    }
    case actionTypes.USER_LOGOUT: {
      return {
        ...state,
        user: null,
      };
    }

    default:
      return state;
  }
}
