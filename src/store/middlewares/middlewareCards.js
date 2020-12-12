import { actionTypes } from '../actions';
import { getCards } from '../../services';

const middlewareCards = (store) => (next) => async (action) => {
  switch (action.type) {
    case actionTypes.INIT_CARDS:
      try {
        const data = await getCards();
        store.dispatch({
          type: actionTypes.GET_CARDS_SUCCESS,
          data,
        });
      } catch (e) {
        console.log(e);
        store.dispatch({ type: actionTypes.GET_CARDS_FAIL });
      }
      break;
    default:
      next(action);
      break;
  }
};

export default middlewareCards;
