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

  const selectedDecks = useSelector(
    (state) => state.modalWindowsReducer.selectedDecks
  );

  const selectedCardData = () => {
    return cards.filter((card) => card._id === cardId)[0];
  };

  const { front, back, decks, learnLevel } = selectedCardData();

  const [cardData, setCardData] = useState(selectedCardData());

  const [frontValue, setFrontValue] = useState(front.value);
  const [backValue, setBackValue] = useState(back.value);

  const onCancelEditCardModal = () => {
    dispatch(actionCreator.changeEditCardVisible(false));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(actionCreator.updateCard([cardId, cardData]));
  };

  const onFrontChange = (e) => {
    setCardData((prevState) => ({
      ...prevState,
      front: {
        ...prevState.front,
        value: e.target.value,
      },
    }));
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
          value={cardData.front.value}
          onChange={onFrontChange}
        />
        <textarea
          className="input textarea_create-card"
          value={cardData.back.value}
          onChange={onBackChange}
        />
        <input type="submit" value="Save" className="btn" />
      </form>
      <DecksSelector decksOfCard={selectedCardData().decks} />
    </div>
  );
}

export default EditCardModal;
