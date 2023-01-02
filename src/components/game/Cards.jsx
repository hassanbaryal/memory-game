import React, { useState, useEffect } from 'react';

function Cards({ deck, updateScore }) {
  const [randomCards, setRandomCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);

  function getRandomNumber() {
    return Math.floor(Math.random() * 52);
  }

  function resetRandomCards() {
    const randCards = [];

    while (randCards.length < 5) {
      const index = getRandomNumber();
      if (!randCards.find((card) => card.code === deck.cards[index].code)) {
        randCards.push(deck.cards[index]);
      }
    }
    setRandomCards(randCards);
  }

  function handleCardSubmit(card) {
    resetRandomCards();
    // If card does not exist in clickedCards array
    if (!clickedCards.find((code) => code === card.code)) {
      setClickedCards((prev) => prev.concat(card.code));
      updateScore(true);
      return;
    }
    // Clicked card already exists in array, therefore reset game/array
    setClickedCards([]);
    updateScore(false);
  }

  useEffect(() => {
    resetRandomCards();
  }, []);

  return (
    <div className="flex flex-col gap-16 w-3/4 items-center">
      <p>Click on cards that you have not previously selected</p>
      <div className="flex gap-3">
        {
          randomCards.map((card) => (
            <button type="button" key={card.code} onClick={() => handleCardSubmit(card)}>
              <img src={card.image} alt={`${card.value} of ${card.suit}`} className="h-40" />
            </button>
          ))
        }
      </div>
      <button type="button" className="text-white bg-black w-24 h-9 rounded-md" onClick={() => resetRandomCards()}>Skip</button>
    </div>
  );
}

export default Cards;
