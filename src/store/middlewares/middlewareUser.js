import { actionTypes, actionCreator } from '../actions';
import {
  getUser,
  postUser,
  deleteUser,
  updateUser,
  getDecksByIdsArr,
  getCardsByIdsArr,
} from '../../services';

const middlewareUser = (store) => (next) => async (action) => {
  switch (action.type) {
    case actionTypes.INIT_USER:
      try {
        const data = await getUser(action.data._id);
        if (!data) {
          store.dispatch(actionCreator.addUser(action.data));
        } else {
          if (data.decks.length > 0) {
            store.dispatch({
              type: actionTypes.GET_DECKS_BY_IDS_ARR,
              data: data.decks,
            });
          }
          if (data.cards.length > 0) {
            // const userCards = await getCardsByIdsArr(data.cards);
            store.dispatch({
              type: actionTypes.GET_CARDS_BY_IDS_ARR,
              data: data.cards,
            });
          }
        }

        store.dispatch({
          type: actionTypes.GET_USER_SUCCESS,
          data,
        });
        // store.dispatch({
        //   type: actionTypes.
        // })
      } catch (e) {
        console.log(e);
        store.dispatch({ type: actionTypes.GET_USER_FAIL });
      }
      break;
    case actionTypes.ADD_USER:
      try {
        await postUser(action.data);
        const data = await getUser();
        store.dispatch({
          type: actionTypes.GET_USER_SUCCESS,
          data,
        });
      } catch (e) {
        console.log(e);
        store.dispatch({ type: actionTypes.GET_USER_FAIL });
      }
      break;
    case actionTypes.UPDATE_USER:
      try {
        await updateUser(...action.data);
        const data = await getUser(action.data[0]);
        store.dispatch({
          type: actionTypes.GET_USER_SUCCESS,
          data,
        });
      } catch (e) {
        console.log(e);
        store.dispatch({ type: actionTypes.GET_USER_FAIL });
      }
      break;
    case actionTypes.DELETE_USER:
      try {
        await deleteUser(action.data);
      } catch (e) {
        console.log(e);
        store.dispatch({ type: actionTypes.GET_USER_FAIL });
      }
      break;
    default:
      next(action);
      break;
  }
};

export default middlewareUser;
