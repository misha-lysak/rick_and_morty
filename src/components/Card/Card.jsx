import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

export const Card = ({ character, handleSelect }) => {
  console.log('hello');
  return (
    <div
      onClick={() => handleSelect(character.id)}
      className="card"
    >
      <img className="card__img" src={character.image} alt={character.name} />
      <p className="card__name">{character.name}</p>
    </div>
  );
};

Card.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    id: PropTypes.number,
  }),
  handleSelect: PropTypes.func.isRequired,
};

Card.defaultProps = {
  character: {},
};
