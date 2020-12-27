import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreator } from '../../store/actions';
import './CreateCardModal.css';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import DecksSelector from './DecksSelector';

function CreateCardModal() {
  const dispatch = useDispatch();

  const createCardModalVisibility = useSelector(
    (state) => state.modalWindowsReducer.createCardVisibility
  );

  useEffect(() => {
    dispatch(actionCreator.initDecks());
  }, [dispatch]);

  const initialCardState = {
    decks: [],
    showDates: [],
    date: new Date(),
    front: { type: 'text', value: '' },
    back: { type: 'text', value: '' },
    nextShow: new Date(),
    learnLevel: 0,
  };

  const [cardInfo, setCardInfo] = useState(initialCardState);

  const selectedDecksIds = useSelector(
    (state) => state.modalWindowsReducer.selectedDecks
  );

  const onSubmit = (e) => {
    e.preventDefault();

    const { showDates, date, front, back, nextShow, learnLevel } = cardInfo;

    const card = {
      decks: selectedDecksIds,
      showDates,
      date,
      front,
      back,
      nextShow,
      learnLevel,
    };

    dispatch(actionCreator.addCard(card));
    setCardInfo(initialCardState);
  };

  const onChangeFront = (e) => {
    setCardInfo({
      ...cardInfo,
      front: { ...cardInfo.front, value: e.target.value },
    });
  };

  const onChangeBack = (e) => {
    setCardInfo({
      ...cardInfo,
      back: { ...cardInfo.back, value: e.target.value },
    });
  };

  const onCancelCreateCardModal = (e) => {
    e.stopPropagation();
    dispatch(actionCreator.changeCreateCardModalVisible(false));
  };

  if (!createCardModalVisibility) return null;
  return (
    <div className="modal modal--center">
      <CancelPresentationIcon onClick={onCancelCreateCardModal} />
      <form onSubmit={onSubmit}>
        <textarea
          className="input textarea_create-card"
          onChange={onChangeFront}
          value={cardInfo.front.value}
          type="text"
          required
          placeholder="Front Side"
        />
        <textarea
          className="input textarea_create-card"
          onChange={onChangeBack}
          value={cardInfo.back.value}
          type="text"
          required
          placeholder="Back Side"
        />
        <DecksSelector />

        <input type="submit" value="Save" className="btn" />
      </form>
    </div>
  );
}

export default CreateCardModal;
