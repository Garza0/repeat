import { actionTypes } from '../actions';
import {
  getCards,
  postCard,
  deleteCard,
  updateCardById,
  getCardsByIdsArr,
} from '../../services';

const middlewareCards = (store) => (next) => async (action) => {
  switch (action.type) {
    case actionTypes.GET_CARDS_BY_IDS_ARR:
      try {
        const data = await getCardsByIdsArr(action.data);
        store.dispatch({
          type: actionTypes.GET_USER_CARDS_SUCCESS,
          data,
        });
      } catch (e) {
        store.dispatch({
          type: actionTypes.GET_USER_CARDS_FAIL,
        });
        console.log(e);
      }
      break;
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
    case actionTypes.ADD_CARD:
      try {
        await postCard(action.data);
        const data = await getCards();
        store.dispatch({
          type: actionTypes.GET_CARDS_SUCCESS,
          data,
        });
      } catch (e) {
        console.log(e);
      }
      break;
    case actionTypes.DELETE_CARD:
      try {
        await deleteCard(action.data);
        const data = await getCards();
        store.dispatch({
          type: actionTypes.GET_CARDS_SUCCESS,
          data,
        });
      } catch (e) {
        console.log(e);
      }
      break;
    case actionTypes.UPDATE_CARD:
      try {
        await updateCardById(...action.data);
        const data = await getCards();
        store.dispatch({
          type: actionTypes.GET_CARDS_SUCCESS,
          data,
        });
      } catch (e) {
        console.log(e);
      }
      break;
    default:
      next(action);
      break;
  }
};

export default middlewareCards;
