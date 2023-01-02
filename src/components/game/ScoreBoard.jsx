import React from 'react';

function ScoreBoard({ currentScore, bestScore }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <p>
        Current Score:
        <span> </span>
        {currentScore}
      </p>
      <p>
        Best Score:
        <span> </span>
        {bestScore}
      </p>
    </div>
  );
}

export default ScoreBoard;
