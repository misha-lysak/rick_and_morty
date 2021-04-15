import React, { useEffect, useState } from 'react';
import './App.scss';
import { getHaracters } from './api';
import { CardList } from './components/CardList';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getHaracters()
      .then(setCharacters);
  }, []);

  console.log(characters);
  return (
    <div className="App">
      <CardList characters={characters} />
    </div>
  );
}

export default App;
