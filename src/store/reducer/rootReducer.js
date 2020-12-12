import { combineReducers } from '@reduxjs/toolkit';

import decksReducer from './decksReducer';
import cardsReducer from './cardsReducer';

const rootReducer = combineReducers({
  decksReducer,
  cardsReducer,
});

export default rootReducer;
