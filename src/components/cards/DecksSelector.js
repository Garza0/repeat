import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreator } from '../../store/actions';

function DecksSelector({ decksOfCard }) {
  const dispatch = useDispatch();

  const [selectedDecks, setSelectedDeck] = useState(decksOfCard || []);

  useEffect(() => {
    dispatch(actionCreator.initDecks());
  }, [dispatch]);

  useEffect(() => {
    dispatch(actionCreator.changeSelectedDecks([...selectedDecks]));
  }, [dispatch, selectedDecks]);

  const decks = useSelector((state) => state.decksReducer.decks);

  const onSelectDecksChange = (e) => {
    const selectedDecksArr = [...e.target.selectedOptions];
    const selectedDecksIds = selectedDecksArr.map((option) => option.id);
    setSelectedDeck(selectedDecksIds);
  };

  const options = decks.map((deck) => {
    return (
      <option id={deck._id} key={deck._id} value={deck._id}>
        {deck.description}
      </option>
    );
  });

  return (
    <select
      className="select--multiple"
      value={selectedDecks}
      multiple
      onChange={onSelectDecksChange}
    >
      {options}
    </select>
  );
}

export default DecksSelector;
