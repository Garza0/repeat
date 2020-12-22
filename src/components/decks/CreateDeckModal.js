import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreator } from '../../store/actions';
import './CreateDeckModal.css';

function CreateDeckModal() {
  const dispatch = useDispatch();

  const createDeckModalVisible = useSelector(
    (state) => state.modalWindowsReducer.createDeckVisibility
  );

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

  function onCancelCreateDeckModal(e) {
    e.stopPropagation();
    dispatch(actionCreator.changeCreateDeckModalVisible(false));
  }

  if (!createDeckModalVisible) return null;
  return (
    <div className="create_deck_modal modal">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            required
            className="form-control"
            value={deckInfo.description}
            onChange={onChangeDeckName}
            placeholder="Deck Name"
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Save" className="btn" />
        </div>
      </form>
      <button className="btn">Add cards</button>
      <button className="btn" onClick={onCancelCreateDeckModal}>
        Cancel
      </button>
    </div>
  );
}

export default CreateDeckModal;
