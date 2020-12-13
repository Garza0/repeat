import { actionTypes } from '../actions';
import { getDecks, postDeck } from '../../services';

const middlewareDecks = (store) => (next) => async (action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.INIT_DECKS:
      try {
        const data = await getDecks();
        store.dispatch({
          type: actionTypes.GET_DECKS_SUCCESS,
          data,
        });
      } catch (e) {
        console.log(e);
        store.dispatch({ type: actionTypes.GET_DECKS_FAIL });
      }
      break;
    case actionTypes.ADD_DECK:
      try {
        console.log(action.data);
        await postDeck(action.data);
        const data = await getDecks();
        store.dispatch({
          type: actionTypes.GET_DECKS_SUCCESS,
          data,
        });
      } catch (e) {
        console.log(e.response);
      }

      break;
    default:
      next(action);
      break;
  }
};

export default middlewareDecks;