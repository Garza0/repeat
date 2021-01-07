import React from 'react';
import { useDispatch } from 'react-redux';
import { actionCreator } from '../../store/actions';

function CardsTable({ cards, deckId }) {
  const dispatch = useDispatch();

  const getCardById = (id) => {
    return cards.filter((card) => card._id === id)[0];
  };

  const renderTableHeader = () => {
    const columns = ['Front', 'Back', 'Progress', 'Action'];
    return columns.map((name, i) => <th key={i}>{name}</th>);
  };

  const renderTableBody = () => {
    return cards.map((card) => {
      return (
        <tr key={card._id} id={card._id}>
          <td>{card.front.value}</td>
          <td>{card.back.value}</td>
          <td>{card.learnLevel}</td>
          <td>
            <button id={card._id} onClick={onDeleteCardClick}>
              Delete From Deck
            </button>
          </td>
        </tr>
      );
    });
  };

  const removeDeckFromCardDecks = (card, idToRemove) => {
    const decks = card.decks;
    const changedDecks = decks.filter((deck) => deck !== idToRemove);
    card.decks = changedDecks;
    return card;
  };

  const onDeleteCardClick = (e) => {
    const { id } = e.target;
    const cardData = getCardById(id);
    const changedCardData = removeDeckFromCardDecks(cardData, deckId);

    console.log(deckId, cardData, changedCardData);
    dispatch(actionCreator.updateCard([id, changedCardData]));
  };

  return (
    <div>
      <table id="cards">
        <tbody>
          <tr>{renderTableHeader()}</tr>
          {renderTableBody()}
        </tbody>
      </table>
    </div>
  );
}

export default CardsTable;
