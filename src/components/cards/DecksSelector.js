import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreator } from '../../store/actions';

function DecksSelector() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionCreator.initDecks());
  }, [dispatch]);

  const decks = useSelector((state) => state.decksReducer.decks);

  const onSelectDecksChange = (e) => {
    const selectedDecksArr = [...e.target.selectedOptions];
    const selectedDecksIds = selectedDecksArr.map((option) => {
      return option.id;
    });
    dispatch(actionCreator.changeSelectedDecks([...selectedDecksIds]));
  };

  const options = decks.map((deck) => {
    return (
      <option id={deck._id} key={deck._id} value={deck.description}>
        {deck.description}
      </option>
    );
  });

  return (
    <select
      className="select--multiple"
      multiple
      onChange={onSelectDecksChange}
    >
      {options}
    </select>
  );
}

export default DecksSelector;
