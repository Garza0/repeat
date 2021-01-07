import { combineReducers } from '@reduxjs/toolkit';

import decksReducer from './decksReducer';
import cardsReducer from './cardsReducer';
import modalWindowsReducer from './modalWindowsReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  decksReducer,
  cardsReducer,
  modalWindowsReducer,
  userReducer,
});

export default rootReducer;
