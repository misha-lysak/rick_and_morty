import React from 'react';
import PropTypes from 'prop-types';
import '../Card/Card.scss';

export const CardDescription = ({ selectedCard }) => {
  console.log('selected card =>>>', selectedCard);
  return (
    <div className="card">
      <img className="card__img" src={selectedCard.image} alt={selectedCard.name} />
      <p className="card__name">
        <span className="card__text--left">Name: </span>
        <span className="card__text--right">{selectedCard.name}</span>
      </p>
      <p className="card__name">
        <span className="card__text--left">Status: </span>
        <span className="card__text--right">{selectedCard.status}</span>
      </p>
      <p className="card__name">
        <span className="card__text--left">Species: </span>
        <span className="card__text--right">{selectedCard.species}</span>
      </p>
      <p className="card__name">
        <span className="card__text--left">Gender: </span>
        <span className="card__text--right">{selectedCard.gender}</span>
      </p>
      {selectedCard.location && (
        <p className="card__name">
          <span className="card__text--left">Location: </span>
          <span className="card__text--right">{selectedCard.location.name}</span>
        </p>
      )}
    </div>
  );
};

CardDescription.propTypes = {
  selectedCard: PropTypes.shape({
    name: PropTypes.string,
    status: PropTypes.string,
    image: PropTypes.string,
    species: PropTypes.string,
    gender: PropTypes.string,
    location: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),
};

CardDescription.defaultProps = {
  selectedCard: {},
};
