import { actionTypes, actionCreator } from '../actions';
import {
  getDecks,
  postDeck,
  deleteDeck,
  updateDeckById,
  getDecksByIdsArr,
  updateUser,
} from '../../services';

const middlewareDecks = (store) => (next) => async (action) => {
  switch (action.type) {
    case actionTypes.GET_DECKS_BY_IDS_ARR:
      try {
        const data = await getDecksByIdsArr(action.data);
        store.dispatch({
          type: actionTypes.GET_USER_DECKS_SUCCESS,
          data,
        });
      } catch (e) {
        store.dispatch({
          type: actionTypes.GET_USER_DECKS_FAIL,
        });
        console.log(e);
      }
      break;
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
        const newDeckId = await postDeck(action.data);
        const user = store.getState().userReducer.user;
        const newUserDecks = [...user.decks, newDeckId];
        const newUserObj = { ...user, decks: newUserDecks };
        await updateUser(user._id, newUserObj);
        store.dispatch(actionCreator.initUser(user));
        const data = await getDecks();

        store.dispatch({
          type: actionTypes.GET_DECKS_SUCCESS,
          data,
        });
      } catch (e) {
        console.log(e.response);
      }

      break;
    case actionTypes.DELETE_DECK:
      try {
        await deleteDeck(action.data);
        const data = await getDecks();
        store.dispatch({
          type: actionTypes.GET_DECKS_SUCCESS,
          data,
        });
      } catch (e) {
        console.log(e.response);
      }
      break;
    case actionTypes.UPDATE_DECK:
      try {
        await updateDeckById(...action.data);
        const data = await getDecks();
        store.dispatch({
          type: actionTypes.GET_DECKS_SUCCESS,
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

export default middlewareDecks;
