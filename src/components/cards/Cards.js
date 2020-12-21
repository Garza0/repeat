import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreator } from '../../store/actions';
import Table from './Table';

export default function Cards() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionCreator.initCards());
  }, [dispatch]);

  const cards = useSelector((state) => state.cardsReducer.cards);
  console.log(cards);
  const cardsList = () => {
    return cards.map((currentCard, i) => {
      return (
        <div key={i} className="list-group-item list-group-item-action">
          {currentCard.front.value} | {currentCard.back.value} |
          {currentCard.decks.join(', ')} | {currentCard.learnLevel}
        </div>
      );
    });
  };

  return (
    <div>
      <div className="list-group">
        <Link to="/add_card">
          <button
            type="button"
            className="list-group-item list-group-item-action bg-primary text-light mb-3"
          >
            + Create New Card
          </button>
        </Link>
      </div>
      <div className="list-group">{<Table />}</div>
    </div>
  );
}
