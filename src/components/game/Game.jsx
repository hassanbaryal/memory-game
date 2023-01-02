import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import Cards from './Cards';

function Game() {
  const [deck, setDeck] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const updateScore = (isClickValid) => {
    if (isClickValid) {
      setCurrentScore((s) => s + 1);
    } else {
      setCurrentScore(0);
    }
  };

  useEffect(() => {
    async function fetchDrawDeck(deckID) {
      try {
        const url = `https://www.deckofcardsapi.com/api/deck/${deckID}/draw/?count=52`;
        const response = await fetch(url, { mode: 'cors' });
        const json = await response.json();
        setDeck(json);
        setIsLoading(false);
      } catch (error) {
        throw new Error(error);
      }
    }

    async function fetchDeck() {
      try {
        const url = 'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
        const response = await fetch(url, { mode: 'cors' });
        const json = await response.json();
        fetchDrawDeck(json.deck_id);
      } catch (error) {
        throw new Error(error);
      }
    }
    fetchDeck();
  }, []);

  useEffect(() => {
    if (currentScore > bestScore) setBestScore(currentScore);
  }, [currentScore]);

  if (isLoading) {
    return (
      <Loader />
    );
  }

  return (
    <div className="h-full w-full flex justify-center">
      <Cards deck={deck} updateScore={updateScore} />
    </div>
  );
}

export default Game;
