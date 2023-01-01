import React, { useState, useEffect } from 'react';
import Loader from './Loader';

function Game() {
  const [deck, setDeck] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchDeck() {
      try {
        const url = 'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
        const response = await fetch(url, { mode: 'cors' });
        const json = await response.json();
        setDeck(json);
        setIsLoading(false);
      } catch (error) {
        throw new Error(error);
      }
    }
    fetchDeck();
  }, []);

  if (isLoading) {
    return (
      <Loader />
    );
  }

  return (
    <div className="h-full">
      WAITING
    </div>
  );
}

export default Game;
