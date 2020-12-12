import { actionTypes } from '../actions';
import { getDecks } from '../../services';

const middlewareDecks = (store) => (next) => async (action) => {
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
    default:
      next(action);
      break;
  }
};

export default middlewareDecks;
