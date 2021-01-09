import { configureStore } from '@reduxjs/toolkit';
import middlewareDecks from './middlewares/middlewareDecks';
import middlewareCards from './middlewares/middlewareCards';
import middlewareUser from './middlewares/middlewareUser';
import rootReducer from './reducer/rootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: [middlewareUser, middlewareDecks, middlewareCards],
});

export default store;
