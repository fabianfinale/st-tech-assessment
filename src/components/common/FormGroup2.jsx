import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import Select from './Select';
import { countries } from '../../utils/countries';

const FormGroup2 = ({ values, errors, onChange: handleChange }) => {
  return (
    <section className='form__group group2'>
      <h3 className='group__heading text--black'>2. Billing Information</h3>
      <TextInput
        name='fullName'
        additionalClasses='top'
        label='Full name'
        value={values.fullName}
        onChange={handleChange}
        error={errors?.fullName}
      />
      <TextInput
        name='billingAddress'
        additionalClasses='top'
        label='Billing Address'
        value={values.billingAddress}
        onChange={handleChange}
        error={errors?.billingAddress}
      />
      <div className='two-columns'>
        <TextInput
          name='city'
          additionalClasses='top'
          label='City'
          value={values.city}
          onChange={handleChange}
          error={errors?.city}
        />
        <TextInput
          name='postalCode'
          additionalClasses='top'
          label='Postal Code'
          value={values.postalCode}
          onChange={handleChange}
          error={errors?.postalCode}
        />
      </div>
      <Select
        name='country'
        optionsList={countries}
        additionalClasses='top'
        label='Country'
        value={values.country}
        onChange={handleChange}
        error={errors?.country}
      />
    </section>
  );
};

FormGroup2.propTypes = {
  values: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};

export default FormGroup2;
