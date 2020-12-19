import { combineReducers } from '@reduxjs/toolkit';

import decksReducer from './decksReducer';
import cardsReducer from './cardsReducer';
import modalWindowsReducer from './modalWindowsReducer';

const rootReducer = combineReducers({
  decksReducer,
  cardsReducer,
  modalWindowsReducer,
});

export default rootReducer;
