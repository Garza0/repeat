import React from 'react';
import { cards } from '../mock/cards';
import { Link } from 'react-router-dom';

export default function Cards() {
  const decksList = () => {
    return cards.map((currentCard, i) => {
      return (
        <button
          key={i}
          type="button"
          className="list-group-item list-group-item-action"
        >
          {currentCard.front.value}
        </button>
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
      <div className="list-group">{decksList()}</div>
    </div>
  );
}
