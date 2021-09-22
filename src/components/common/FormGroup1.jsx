import React from 'react';
import PropTypes from 'prop-types';
import RadioButton from './RadioButton';

const FormGroup1 = ({ selectedValue, onChange: handleChange }) => {
  return (
    <section className='form__group group1'>
      <h3 className='group__heading text--black'>1. Select your plan</h3>
      <div className='radio-group'>
        <RadioButton
          name='plan'
          additionalClasses='form__label--red'
          label='basic'
          value='basic'
          selected={selectedValue}
          onChange={handleChange}
        />
        <RadioButton
          name='plan'
          additionalClasses='form__label--yellow'
          label='advanced'
          value='advanced'
          selected={selectedValue}
          onChange={handleChange}
        />
        <RadioButton
          name='plan'
          additionalClasses='form__label--blue'
          label='pro'
          value='pro'
          selected={selectedValue}
          onChange={handleChange}
        />
      </div>
    </section>
  );
};

FormGroup1.propTypes = {
  selectedValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormGroup1;
