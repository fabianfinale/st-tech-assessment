import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import Select from './Select';
import { months } from '../../utils/months';
import { years } from '../../utils/years';

const FormGroup3 = ({ values, errors, onChange: handleChange }) => {
  return (
    <section className='form__group group3'>
      <h3 className='group__heading text--black'>3. Credit Card Information</h3>
      <TextInput
        name='cardHolder'
        additionalClasses='top'
        label="Cardholder's name"
        value={values.cardHolder}
        onChange={handleChange}
        error={errors?.cardHolder}
      />
      <TextInput
        name='cardNumber'
        additionalClasses='top'
        label='Card Number'
        value={values.cardNumber}
        onChange={handleChange}
        error={errors?.cardNumber}
      />
      <div className='two-columns'>
        <Select
          name='expirationMonth'
          optionsList={months}
          additionalClasses='top'
          label='Expiry month'
          value={values.expirationMonth}
          onChange={handleChange}
          error={errors?.expirationMonth}
        />
        <Select
          name='expirationYear'
          optionsList={years}
          additionalClasses='top'
          label='Expiry Year'
          value={values.expirationYear}
          onChange={handleChange}
          error={errors?.expirationYear}
        />
      </div>
      <TextInput
        name='cvv'
        additionalClasses='top'
        label='CVV'
        value={values.cvv}
        onChange={handleChange}
        error={errors?.cvv}
      />
    </section>
  );
};

FormGroup3.propTypes = {
  values: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};

export default FormGroup3;
