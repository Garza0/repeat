import { combineReducers } from '@reduxjs/toolkit';

import decksReducer from './decksReducer';
import cardsReducer from './cardsReducer';
import modalWindowsReducer from './modalWindowsReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  userReducer,
  decksReducer,
  cardsReducer,
  modalWindowsReducer,
});

export default rootReducer;
