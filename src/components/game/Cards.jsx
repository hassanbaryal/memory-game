import React, { useState, useEffect } from 'react';

function Cards({ deck }) {
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

  // function handleCardSubmit(card) {

  // }

  useEffect(() => {
    resetRandomCards();
  }, []);

  return (
    <div className="flex flex-col gap-16 w-3/4 items-center">
      <p>Click on cards that you have not previously selected</p>
      <div className="flex gap-3">
        {
          randomCards.map((card) => (
            <img src={card.image} alt={`${card.value} of ${card.suit}`} key={card.code} className="h-40" />
          ))
        }
      </div>
      <button type="button" className="text-white bg-black w-24 h-9 rounded-md" onClick={() => resetRandomCards()}>Skip</button>
    </div>
  );
}

export default Cards;
