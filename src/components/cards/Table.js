import React from 'react';
import { useSelector } from 'react-redux';

function Table() {
  const cards = useSelector((state) => state.cardsReducer.cards);

  const renderTableData = () => {
    return cards.map((card, i) => {
      return (
        <tr key={i} id={card._id}>
          <td>{card.front.value}</td>
          <td>{card.back.value}</td>
          <td>{card.decks.join(', ')}</td>
          <td>{card.learnLevel}</td>
          <td>
            <button id={card._id}>Edit</button>
            <button id={card._id}>Delete</button>
          </td>
        </tr>
      );
    });
  };

  const renderTableHeader = () => {
    const columns = ['Front', 'Back', 'Decks', 'Learn level', 'Action'];
    return columns.map((name, i) => {
      return <th key={i}>{name}</th>;
    });
  };

  return (
    <div>
      <table id="cards">
        <tbody>
          <tr>{renderTableHeader()}</tr>
          {renderTableData()}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
