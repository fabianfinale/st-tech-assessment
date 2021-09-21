import React from 'react';
import PropTypes from 'prop-types';

const Select = ({
  name,
  value,
  optionsList,
  onChange: handleChange,
  label,
  additionalClasses,
  error,
}) => {
  return (
    <label className={`form__label ${additionalClasses}`}>
      {label}
      <select
        className={`form__control ${error ? 'error' : ''}`}
        type='text'
        name={name}
        value={value}
        onChange={handleChange}>
        {error ? (
          <option value=''>{error}</option>
        ) : (
          <option value=''>&nbsp;</option>
        )}
        {optionsList.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  optionsList: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  additionalClasses: PropTypes.string,
};

export default Select;
