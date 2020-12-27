import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { getDeckById } from '../../services/index';
//TODO: rewrite all component logic
export default function EditDeck() {
  let { id } = useParams();
  const [deckData, setDeckData] = useState(null);

  const [renameDeck, setRenameDeck] = useState(false);

  const getDeck = useCallback(async () => {
    const data = await getDeckById(id);
    setDeckData(data);
  }, [id]);

  useEffect(() => {
    getDeck();
  }, [getDeck]);

  const onRenameDeckClick = () => {
    setRenameDeck(!renameDeck);
  };

  return (
    <div>
      <div className="deck_header">
        {renameDeck ? (
          <input
            placeholder={deckData.description}
            defaultValue={deckData.description}
          />
        ) : (
          deckData?.description
        )}
        <button onClick={onRenameDeckClick}>
          {renameDeck ? 'Save' : 'Rename Deck'}
        </button>
      </div>
      <div className="deck_cards">cards</div>
    </div>
  );
}
