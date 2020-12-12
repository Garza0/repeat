import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreator } from '../../store/actions';

export default function Decks() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionCreator.initDecks());
  }, [dispatch]);

  const decks = useSelector((state) => state.decksReducer.decks);

  const decksList = () => {
    return decks.map((currentDeck, i) => {
      return (
        <button
          key={i}
          type="button"
          className="list-group-item list-group-item-action"
        >
          {currentDeck.description}
        </button>
      );
    });
  };

  return (
    <>
      <div>
        <div className="list-group">
          <Link to="/add_deck">
            <button
              type="button"
              className="list-group-item list-group-item-action bg-primary text-light mb-3"
            >
              + Create New Deck
            </button>
          </Link>
        </div>
      </div>
      <div className="list-group">{decksList()}</div>
    </>
  );
}
