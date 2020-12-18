import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Decks.css';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreator } from '../../store/actions';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditDeleteModal from '../modal/EditDeleteModal';

export default function Decks() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionCreator.initDecks());
  }, [dispatch]);

  const [showModal, setShowModal] = useState(false);
  const [clickedElementId, setClickedElementId] = useState(null);

  const decks = useSelector((state) => state.decksReducer.decks);

  const onModalClick = (e) => {
    setClickedElementId(Number(e.target.closest('div').id));
    setShowModal(!showModal);
  };

  const decksList = () => {
    return decks.map((currentDeck, i) => {
      return (
        <div key={i} className="deck_list__item">
          {currentDeck.description}
          <div id={i} onClick={onModalClick} className="more_btn">
            <MoreVertIcon />
            <EditDeleteModal
              deckId={currentDeck._id}
              showById={clickedElementId}
              id={i}
              show={showModal}
            />
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div>
        <div className="list-group">
          <Link to="/add_deck">
            <div className="deck_list__item">+ Create New Deck</div>
          </Link>
        </div>
      </div>
      <div className="list-group">{decksList()}</div>
    </>
  );
}
