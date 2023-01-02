import React from 'react';
import Header from './header/Header';
import Game from './game/Game';

function App() {
  return (
    <div className="h-screen flex flex-col overflow-auto">
      <Header />
      <Game />
    </div>
  );
}

export default App;
