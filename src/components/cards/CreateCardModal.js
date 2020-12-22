import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreator } from '../../store/actions';

function CreateCardModal() {
  const dispatch = useDispatch();

  const createCardModalVisibility = useSelector(
    (state) => state.modalWindowsReducer.createCardVisibility
  );

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

  const onSubmit = (e) => {
    e.preventDefault();

    const card = {
      decks: cardInfo.decks,
      showDates: cardInfo.showDates,
      date: cardInfo.date,
      front: cardInfo.front,
      back: cardInfo.back,
      nextShow: cardInfo.nextShow,
      learnLevel: cardInfo.learnLevel,
    };
    setCardInfo(initialCardState);
    dispatch(actionCreator.addCard(card));
  };

  function onChangeFront(e) {
    setCardInfo({
      ...cardInfo,
      front: { ...cardInfo.front, value: e.target.value },
    });
  }

  function onChangeBack(e) {
    setCardInfo({
      ...cardInfo,
      back: { ...cardInfo.back, value: e.target.value },
    });
  }

  const onCancelCreateCardModal = (e) => {
    e.stopPropagation();
    dispatch(actionCreator.changeCreateCardModalVisible(false));
  };

  if (!createCardModalVisibility) return null;
  return (
    <div className="create_card_modal modal modal--center">
      <form onSubmit={onSubmit}>
        <input
          className="input"
          onChange={onChangeFront}
          value={cardInfo.front.value}
          type="text"
          required
          placeholder="Front Side"
        />
        <input
          className="input"
          onChange={onChangeBack}
          value={cardInfo.back.value}
          type="text"
          required
          placeholder="Back Side"
        />
        <input type="submit" value="Save" className="btn" />
      </form>
      <button className="btn">Add this card to decks</button>
      <button className="btn" onClick={onCancelCreateCardModal}>
        Cancel
      </button>
    </div>
  );
}

export default CreateCardModal;
