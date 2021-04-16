import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './CardList.scss';

import { Card } from '../Card';
import { CardDescription } from '../CardDescription';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';

export const CardList = ({ characters, onSubmit, onDelete }) => {
  const [selectedCardId, setSelectedCardId] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleSelect = useCallback(
    (id) => {
      setSelectedCardId(id);
      setSelectedCard(characters.find((character) => character.id === setSelectedCardId));
    }, [selectedCardId],
  );

  useEffect(() => {
      setSelectedCard(characters.find(character => character.id === selectedCardId));
  }, [selectedCardId, selectedCard]);

  return (
    <>
      <Route path="/" exact>
        <div className="card-list">
        
          {characters.map((character) => (
            <Link key={character.id + 'a'} to={`/${character.name}`} >
              <Card
                key={character.id}
                character={character}
                handleSelect={handleSelect}
              />
            </Link>
          ))}
        </div>
      </Route>
      {selectedCard ? (
        <Route path={`/${selectedCard.name}`} exact>
          <CardDescription
            selectedCard={selectedCard}
            onSubmit={onSubmit}
            onDelete={onDelete}
          />
        </Route>
      ) : ''}
    </>
  );
};

CardList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
    }),
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
