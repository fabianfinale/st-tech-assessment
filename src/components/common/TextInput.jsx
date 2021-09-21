import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({
  name,
  value,
  onChange: handleChange,
  label,
  additionalClasses,
  error,
}) => {
  return (
    <label className={`form__label ${additionalClasses}`}>
      {label}
      <input
        className={`form__control ${error ? 'error' : ''}`}
        type='text'
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={error ?? ''}
      />
    </label>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  additionalClasses: PropTypes.string,
};

export default TextInput;
