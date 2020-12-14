import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreator } from '../../store/actions';

function CreateCard() {
  const dispatch = useDispatch();

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

  function onSubmit(e) {
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
  }

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

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Front</label>
          <input
            type="text"
            className="form-control"
            onChange={onChangeFront}
            value={cardInfo.front.value}
          />
        </div>

        <div className="form-group">
          <label>Back</label>
          <input
            type="text"
            className="form-control"
            onChange={onChangeBack}
            value={cardInfo.back.value}
          />
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Create Card"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default CreateCard;
