import React from 'react';
import PropTypes from 'prop-types';

const RadioButton = ({
  name,
  value,
  onChange: handleChange,
  label,
  selected,
  additionalClasses,
}) => {
  return (
    <label className={`form__label ${additionalClasses}`}>
      <span
        className={`radio-btn ${value === selected ? 'checked' : ''}`}></span>
      {label}
      <input
        className='form__control'
        name={name}
        type='radio'
        value={value}
        checked={value === selected}
        onChange={handleChange}
      />
    </label>
  );
};

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  additionalClasses: PropTypes.string,
};

export default RadioButton;
