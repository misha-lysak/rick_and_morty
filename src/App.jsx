import React, { useEffect, useState, useCallback } from 'react';
import './App.scss';
import { getHaracters } from './api';
import { CardList } from './components/CardList';

function App() {
  const [characters, setCharacters] = useState([]);
  
  useEffect(() => {
    getHaracters()
      .then(setCharacters);
  }, []);

  const onSubmit = useCallback(
    (event, id, newCharacter, close) => {
      event.preventDefault();

      const newCharacters = [...characters].filter(character => character.id !== id);

      setCharacters([
        ...newCharacters,
        newCharacter
      ]);
      close();
    }, [characters],
  )

  const onDelete = useCallback(
    (id) => {
      setCharacters(prevState => 
        prevState.filter(state => state.id !== id)
      )
    }, [characters]
  )
  

  console.log(characters);
  return (
    <div className="App">
      <CardList
        characters={characters}
        onSubmit={onSubmit}
        onDelete={onDelete}
      />
    </div>
  );
}

export default App;
