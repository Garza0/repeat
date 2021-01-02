import React, { useState, useEffect } from 'react';
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

  const [cardData, setCardData] = useState(selectedCardData());

  useEffect(() => {
    setCardData((prevState) => ({ ...prevState, decks: [...selectedDecks] }));
  }, [selectedDecks]);

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
    setCardData((prevState) => ({
      ...prevState,
      back: {
        ...prevState.back,
        value: e.target.value,
      },
    }));
  };

  const resetCardProgress = () => {
    setCardData({ ...cardData, learnLevel: 0 });
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
      <div className="card-learn-level">{cardData.learnLevel}</div>
      <button onClick={resetCardProgress}>Reset Progress</button>
    </div>
  );
}

export default EditCardModal;
