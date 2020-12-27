import React, { useEffect, useState } from 'react';
import './Decks.css';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreator } from '../../store/actions';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditDeleteModal from './EditDeleteModal';
import CreateDeckModal from './CreateDeckModal';
import { BUTTONS_TEXT } from '../../constants';

export default function Decks() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionCreator.initDecks());
  }, [dispatch]);

  const [showModal, setShowModal] = useState(false);
  const [clickedElementId, setClickedElementId] = useState(null);

  const decks = useSelector((state) => state.decksReducer.decks);
  const decksReversed = [...decks].reverse();

  //TODO: modal open close logic
  const onModalClick = (e) => {
    const newClickedElementId = Number(e.target.closest('div').id);
    if (newClickedElementId === clickedElementId) {
      setShowModal(!showModal);
    } else {
      setClickedElementId(newClickedElementId);
      setShowModal(true);
    }
  };
  //TODO: only one open modal on page
  const onCreateDeckClick = () => {
    setShowModal(false);
    dispatch(actionCreator.changeCreateDeckModalVisible(true));
  };

  const decksList = () => {
    return decksReversed.map((currentDeck, i) => {
      return (
        <div key={i} className="deck-list__item">
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
        <div>
          <div
            className="deck-list__item create_new_deck"
            onClick={onCreateDeckClick}
          >
            <p>{BUTTONS_TEXT.CREATE_NEW_DECK}</p>
            <CreateDeckModal />
          </div>
        </div>
      </div>
      <div>{decksList()}</div>
    </>
  );
}
