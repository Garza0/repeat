import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { getDeckById } from '../../services/index';

export default function EditDeck() {
  let { id } = useParams();

  const [deckData, setDeckData] = useState(null);
  const getDeck = useCallback(async () => {
    const deckData = await getDeckById(id);
    setDeckData(deckData);
  }, [id]);

  useEffect(() => getDeck(), [getDeck]);

  console.log(deckData);

  return <div>edit deck page {deckData.description}</div>;
}
