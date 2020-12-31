import React, { useState } from 'react';
import DecksSelector from './DecksSelector';
import { useSelector, useDispatch } from 'react-redux';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import { actionCreator } from '../../store/actions';

function EditCardModal({ cardId }) {
  const dispatch = useDispatch();

  const modalVisibility = useSelector(
    (state) => state.modalWindowsReducer.editCardVisibility
  );
  const cards = useSelector((state) => state.cardsReducer.cards);

  const selectedCardData = () => {
    return cards.filter((card) => card._id === cardId)[0];
  };

  const { front, back } = selectedCardData();

  const [frontValue, setFrontValue] = useState(front.value);
  const [backValue, setBackValue] = useState(back.value);

  const onCancelEditCardModal = () => {
    dispatch(actionCreator.changeEditCardVisible(false));
  };

  const onSubmit = () => {};

  const onFrontChange = (e) => {
    setFrontValue(e.target.value);
  };

  const onBackChange = (e) => {
    setBackValue(e.target.value);
  };

  if (!modalVisibility) return null;
  return (
    <div className="modal modal--center">
      <CancelPresentationIcon onClick={onCancelEditCardModal} />
      <form onSubmit={onSubmit}>
        <textarea
          className="input textarea_create-card"
          value={frontValue}
          onChange={onFrontChange}
        />
        <textarea
          className="input textarea_create-card"
          value={backValue}
          onChange={onBackChange}
        />
      </form>
      <DecksSelector decksOfCard={selectedCardData().decks} />

      <input type="submit" value="Save" className="btn" />
    </div>
  );
}

export default EditCardModal;
