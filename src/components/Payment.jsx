import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import useScrollPosition from '../hooks/useScrollPosition';
import useQuery from '../hooks/useQuery';
import { Link } from 'react-router-dom';
import FormGroup1 from './common/FormGroup1';
import FormGroup2 from './common/FormGroup2';
import FormGroup3 from './common/FormGroup3';

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

    setValues(initialState);
  };

  return (
    <section id='payment-section' className='payment-section' ref={paymentRef}>
      <h2 className='section__heading uppercase text--black'>Reviews</h2>
      <form onSubmit={handleSubmit}>
        <FormGroup1 selectedValue={values.plan} onChange={handleChange} />
        <div className='two-columns'>
          <FormGroup2 values={values} errors={errors} onChange={handleChange} />
          <FormGroup3 values={values} errors={errors} onChange={handleChange} />
        </div>
        <p className='terms'>
          By continuing, I acknowledge that I’ve read and agree to the{' '}
          <Link to='#'>Terms of Service </Link> &{' '}
          <Link to='#'>Privacy Policy</Link>.
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
