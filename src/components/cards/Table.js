import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreator } from '../../store/actions';
import './Table.css';

function Table() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cardsReducer.cards);
  const decks = useSelector((state) => state.decksReducer.decks);

  const renderTableHeader = () => {
    const columns = ['Front', 'Back', 'Decks', 'Learn level', 'Action'];
    return columns.map((name, i) => <th key={i}>{name}</th>);
  };

  const getDeckDescription = (arrOfDecksIds) => {
    const decksOfCard = decks.filter((deck) => {
      return arrOfDecksIds.includes(deck._id);
    });

    const decksDescriptions = decksOfCard.map((deck) => deck.description);
    return decksDescriptions;
  };

  const renderTableBody = () => {
    return cards.map((card, i) => {
      const decksNameArr = getDeckDescription(card.decks);

      return (
        <tr key={i} id={card._id}>
          <td>{card.front.value}</td>
          <td>{card.back.value}</td>
          <td>{decksNameArr.join(', ')}</td>
          <td>{card.learnLevel}</td>
          <td>
            <button id={card._id} onClick={onEditCardClick}>
              Edit
            </button>
            <button id={card._id} onClick={onDeleteCardClick}>
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  const onEditCardClick = (e) => {};

  const onDeleteCardClick = (e) => {
    dispatch(actionCreator.deleteCard(e.target.id));
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

export default Table;
