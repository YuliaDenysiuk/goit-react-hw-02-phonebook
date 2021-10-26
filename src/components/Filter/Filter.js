import React from 'react';
import PropTypes from 'prop-types';

function Filter({ value, handlerFilterChange }) {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={value}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        onChange={handlerFilterChange}
      />
    </>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  handlerFilterChange: PropTypes.func.isRequired,
};

export default Filter;
