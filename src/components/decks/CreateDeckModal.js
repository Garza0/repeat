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

  const onChangeDeckName = (e) => {
    setDeckInfo({
      ...deckInfo,
      description: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const deck = {
      description: deckInfo.description,
      cards: deckInfo.cards,
      date: deckInfo.date,
    };

    dispatch(actionCreator.addDeck(deck));
  };

  const onCancelCreateDeckModal = (e) => {
    e.stopPropagation();
    dispatch(actionCreator.changeCreateDeckModalVisible(false));
  };

  if (!createDeckModalVisible) return null;
  return (
    <div className="create_deck_modal modal">
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            required
            value={deckInfo.description}
            onChange={onChangeDeckName}
            placeholder="Deck Name"
          />
        </div>
        <div>
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
