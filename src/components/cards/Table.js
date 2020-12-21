import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreator } from '../../store/actions';

function Table() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cardsReducer.cards);

  const onEditCardClick = (e) => {};

  const onDeleteCardClick = (e) => {
    dispatch(actionCreator.deleteCard(e.target.id));
  };

  const renderTableData = () => {
    return cards.map((card, i) => {
      return (
        <tr key={i} id={card._id}>
          <td>{card.front.value}</td>
          <td>{card.back.value}</td>
          <td>{card.decks.join(', ')}</td>
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
