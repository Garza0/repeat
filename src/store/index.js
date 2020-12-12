import { configureStore } from '@reduxjs/toolkit';
import middlewareDecks from './middlewares/middlewareDecks';
import middlewareCards from './middlewares/middlewareCards';
import rootReducer from './reducer/rootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: [middlewareDecks, middlewareCards],
});

export default store;
