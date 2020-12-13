import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreator } from '../../store/actions';

function CreateDeck() {
  const dispatch = useDispatch();

  const [deckInfo, setDeckInfo] = useState({
    description: '',
    date: new Date(),
    cards: [],
  });

  function onChangeDeckName(e) {
    setDeckInfo({
      ...deckInfo,
      description: e.target.value,
    });
  }

  function onSubmit(e) {
    e.preventDefault();

    const deck = {
      description: deckInfo.description,
      cards: deckInfo.cards,
      date: deckInfo.date,
    };

    dispatch(actionCreator.addDeck(deck));
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Deck Name</label>
          <input
            type="text"
            required
            className="form-control"
            value={deckInfo.description}
            onChange={onChangeDeckName}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create Deck"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default CreateDeck;
