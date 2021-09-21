import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import useScrollPosition from '../hooks/useScrollPosition';
import useQuery from '../hooks/useQuery';
import RadioButton from './common/RadioButton';
import TextInput from './common/TextInput';
import Select from './common/Select';
import { countries } from '../utils/countries';
import { months } from '../utils/months';
import { years } from '../utils/years';
import { Link } from 'react-router-dom';

const Payment = ({ navbarRef, setScrollPosition }) => {
  const paymentRef = useRef(null);
  const initialState = {
    fullName: '',
    billingAddress: '',
    city: '',
    postalCode: '',
    country: '',
    cardHolder: '',
    cardNumber: '',
    expirationMonth: '',
    expirationYear: '',
    cvv: '',
    plan: useQuery().get('plan') ?? 'basic',
  };

  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState(null);

  const scrollPosition = useScrollPosition(
    {
      paymentRef,
    },
    navbarRef,
    'payment-section'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setScrollPosition(scrollPosition);
  }, [scrollPosition, setScrollPosition]);

  const handleChange = (e) => {
    setErrors({ ...errors, [e.target.name]: null });
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    for (const key in values) {
      if (!values[key]) {
        formErrors[key] = 'This value is required';
      }
    }
    if (Object.keys(formErrors).length > 0) return setErrors(formErrors);
    console.log(`values`, values);
    setValues(initialState);
  };

  return (
    <section id='payment-section' className='payment-section' ref={paymentRef}>
      <h2 className='section__heading uppercase text--black'>Reviews</h2>
      <form onSubmit={handleSubmit}>
        <div className='form__group group1'>
          <h3 className='group__heading text--black'>1. Select your plan</h3>
          <div className='radio-group'>
            <RadioButton
              name='plan'
              additionalClasses='form__label--red'
              label='basic'
              value='basic'
              selected={values.plan}
              onChange={handleChange}
            />
            <RadioButton
              name='plan'
              additionalClasses='form__label--yellow'
              label='advanced'
              value='advanced'
              selected={values.plan}
              onChange={handleChange}
            />
            <RadioButton
              name='plan'
              additionalClasses='form__label--blue'
              label='pro'
              value='pro'
              selected={values.plan}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='two-columns'>
          <div className='form__group group2'>
            <h3 className='group__heading text--black'>
              2. Billing Information
            </h3>
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
          </div>
          <div className='form__group group3'>
            <h3 className='group__heading text--black'>
              3. Credit Card Information
            </h3>
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
          </div>
        </div>
        <p className='terms'>
          By continuing, I acknowledge that I’ve read and agree to the{' '}
          <Link to='#'>Terms of Service </Link> &{' '}
          <Link to='#'>Privacy Policy </Link>.
        </p>
        <button
          type='submit'
          className='btn btn--gradient btn--extra-small'
          data-text='Download'>
          Download
        </button>
      </form>
    </section>
  );
};

Payment.propTypes = {
  navbarRef: PropTypes.object.isRequired,
  setScrollPosition: PropTypes.func.isRequired,
};
export default Payment;
