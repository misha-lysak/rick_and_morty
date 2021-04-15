import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Card } from '../Card';
import './CardList.scss';
import { CardDescription } from '../CardDescription';
import { getPerson } from '../../api';

export const CardList = ({ characters }) => {
  const [selectedCardId, setSelectedCardId] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);

  console.log('list', characters);
  const handleSelect = useCallback(
    (id) => {
      setSelectedCardId(id);
      setSelectedCard(characters.find((character) => character.id === setSelectedCardId));
      console.log('id =====', id);
    }, [],
  );

  useEffect(() => {
    getPerson(selectedCardId)
      .then(setSelectedCard);
  }, [selectedCardId]);

  return (
    <>
      <div className="card-list">
        {characters.map((character) => (
          <Card
            key={character.id}
            character={character}
            handleSelect={handleSelect}
          />
        ))}
      </div>
      {selectedCard !== null ? (
        <CardDescription selectedCard={selectedCard} />
      ) : ''}
    </>
  );
};

CardList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
    }),
  ).isRequired,
};
