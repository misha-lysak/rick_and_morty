import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import './EditCard.scss';

export const EditCard = ({ character, handleOpenEdit, handleSubmit }) => {
  const [editingCharacter, setEditingCharacter] = useState(character);

  const onChange = useCallback(
    (event) => {
      const { name, value } = event.target;

      setEditingCharacter(prevState => ({
        ...prevState,
        [name]: value
      }))
    }, []
  )

  return (
    <form
      className="edit-form"
      onSubmit={(event) => handleSubmit(event, character.id, editingCharacter, handleOpenEdit)}
    >
      <span
        className="edit-form__close"
        onClick={() => handleOpenEdit()}
      >
        &#10008;
      </span>
      <label htmlFor="name">Name</label>
      <input
        className="edit-form__input"
        name="name"
        id="name"
        type="text"
        value={editingCharacter.name}
        onChange={event => onChange(event)}
      />
      <label htmlFor="status">Status</label>
      <input
        className="edit-form__input"
        name="status"
        id="status"
        type="text"
        value={editingCharacter.status}
        onChange={event => onChange(event)}
      />
      <label htmlFor="species">Species</label>
      <input
        className="edit-form__input"
        name="species"
        id="species"
        type="text"
        value={editingCharacter.species}
        onChange={event => onChange(event)}
      />
      <label htmlFor="gender">Gender</label>
      <input
        className="edit-form__input"
        name="gender"
        id="gender"
        type="text"
        value={editingCharacter.gender}
        onChange={event => onChange(event)}
      />
      <label htmlFor="location">Location</label>
      <input
        className="edit-form__input"
        name="location"
        id="location"
        type="text"
        value={editingCharacter.location.name}
        onChange={event => onChange(event)}
      />
      <button className="edit-form__button" type="submit">Edit</button>
    </form>
  );
};

EditCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  handleOpenEdit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}
