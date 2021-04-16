import React, { useEffect, useState, useCallback } from 'react';
import './App.scss';
import { getHaracters } from './api';
import { CardList } from './components/CardList';
import Pagination from 'react-responsive-pagination';

function App() {
  const [characters, setCharacters] = useState([]);
  const [paginationCharacters, setPaginationCharacters] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [searchPerson, setSearchPerson] = useState('');

  const handleChange = useCallback(
    (event) => {
      const { value } = event.target;
      setSearchPerson(value)
    }, []
  )
  
  useEffect(() => {
    const lowerSearch = searchPerson.toLocaleLowerCase();

    getHaracters()
      .then(response => setCharacters(
        response.filter(item => (
          item.name.toLocaleLowerCase().includes(lowerSearch)
        ))
      ));
  }, [searchPerson]);

  useEffect(() => {
    setPaginationCharacters(characters.slice(currPage - 1, currPage + 4))
  }, [currPage, characters])

  const onSubmit = useCallback(
    (event, id, newCharacter, close) => {
      event.preventDefault();

      const newCharacters = [...characters].filter(character => character.id !== id);

      setCharacters([
        newCharacter,
        ...newCharacters,
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
  
  return (
    <div className="App">
      <div className="find-person">
        <label htmlFor="search" />
        <input
          className='find-person__input'
          type="text"
          name="search"
          id="search" 
          placeholder="Find person"
          value={searchPerson}
          onChange={handleChange}
        />
      </div>
        <CardList
          characters={paginationCharacters}
          onSubmit={onSubmit}
          onDelete={onDelete}
        />
        <Pagination
          current={currPage}
          total={characters.length - 4}
          onPageChange={setCurrPage}
          className='pagination'
        />
      </div>
  );
}

export default App;
