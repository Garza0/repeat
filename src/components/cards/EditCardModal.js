import React from 'react';
import DecksSelector from './DecksSelector';
import { useSelector } from 'react-redux';

function EditCardModal({ cardId }) {
  const cards = useSelector((state) => state.cardsReducer.cards);

  const selectedCardData = () => {
    return cards.filter((card) => card._id === cardId)[0];
  };

  return (
    <div>
      <DecksSelector decksOfCard={selectedCardData().decks} />
    </div>
  );
}

export default EditCardModal;
