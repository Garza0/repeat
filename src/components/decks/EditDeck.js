import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDeckById } from '../../services/index';
import { useDispatch } from 'react-redux';
import { actionCreator } from '../../store/actions';

export default function EditDeck() {
  const dispatch = useDispatch();
  let { id } = useParams();
  const [deckData, setDeckData] = useState(null);
  const [renameDeck, setRenameDeck] = useState(false);
  const [nameInputValue, setNameInputValue] = useState('');
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    setIsFetching(true);
    const getDeck = async () => {
      const data = await getDeckById(id);
      setDeckData(data);
      setNameInputValue(data.description);
      setIsFetching(false);
    };
    getDeck();
  }, [id]);

  const onRenameDeckClick = () => {
    setRenameDeck(true);
  };

  const onSaveDeckNameClick = () => {
    setDeckData((prevState) => ({ ...prevState, description: nameInputValue }));
    setRenameDeck(false);
  };

  useEffect(() => {
    if (deckData) dispatch(actionCreator.updateDeck([id, deckData]));
  }, [deckData, dispatch, id]);

  const onDeckNameChange = (e) => {
    setNameInputValue(e.target.value);
  };

  if (isFetching) return <div>'loading'</div>;
  return (
    <div>
      <div className="deck_header">
        {renameDeck ? (
          <input
            onChange={onDeckNameChange}
            placeholder={nameInputValue}
            defaultValue={nameInputValue}
          />
        ) : (
          deckData.description
        )}
        {!renameDeck ? (
          <button onClick={onRenameDeckClick}>Rename Deck</button>
        ) : (
          <button onClick={onSaveDeckNameClick}>Save</button>
        )}
      </div>
      <div className="deck_cards">cards</div>
    </div>
  );
}
