import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import './CardDescription.scss';
import { Link } from 'react-router-dom';
import { EditCard } from '../EditCard/EditCard';

export const CardDescription = ({ selectedCard, onSubmit, onDelete }) => {
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [editedCharacter, setEditedCharacter] = useState(selectedCard);

  const handleSubmit = useCallback(
    (event, id, newCharacter, close) => {
      event.preventDefault();
      setEditedCharacter(newCharacter);
      onSubmit(event, id, newCharacter, close)
    }, [],
  ) 

  const handleOpenEdit = useCallback(
    () => {
      setIsOpenEdit(prevState => !prevState)
    }, []
  )

  return (
    <div className="selected-card-description">
      <div className="selected-card">
        <img
          className="selected-card__img"
          src={editedCharacter.image}
          alt={editedCharacter.name}
        />
        <p className="selected-card__name">
          <span className="selected-card__text--left">Name: </span>
          <span className="selected-card__text--right">{editedCharacter.name}</span>
        </p>
        <p className="selected-card__name">
          <span className="selected-card__text--left">Status: </span>
          <span className="selected-card__text--right">{editedCharacter.status}</span>
        </p>
        <p className="selected-card__name">
          <span className="selected-card__text--left">Species: </span>
          <span className="selected-card__text--right">{editedCharacter.species}</span>
        </p>
        <p className="selected-card__name">
          <span className="selected-card__text--left">Gender: </span>
          <span className="selected-card__text--right">{editedCharacter.gender}</span>
        </p>
        {editedCharacter.location && (
          <p className="selected-card__name">
            <span className="selected-card__text--left">Location: </span>
            <span className="selected-card__text--right">{editedCharacter.location.name}</span>
          </p>
        )}
        <button
          className="selected-card__button"
          onClick={() => handleOpenEdit()}
        >
          Edit
        </button>
        <Link to="/">
          <button
            onClick={() => onDelete(editedCharacter.id)} className="selected-card__button"
          >
            Delete
          </button>
        </Link>
      </div>
      <Link to="/">
        <button className="home">Home</button>
      </Link>
      {isOpenEdit && (
        <EditCard
          character={editedCharacter}
          handleOpenEdit={handleOpenEdit}
          handleSubmit={handleSubmit}
        />
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
    id: PropTypes.number,
    location: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),
  onSubmit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

CardDescription.defaultProps = {
  selectedCard: {},
};
