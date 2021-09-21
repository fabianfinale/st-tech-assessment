import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const GetItNow = ({ reference }) => {
  return (
    <section
      id='get-it-now-section'
      className='get-it-now-section'
      ref={reference}>
      <div className='section__content'>
        <h2 className='section__heading uppercase heading--red'>
          Get EXP|CON now
        </h2>
        <p className='section__text heading--white'>
          Purchase and download the app.
        </p>
      </div>

      <Link
        to='/pricing'
        className='btn btn--small btn--gradient'
        data-text='Try it now'>
        Try it now
      </Link>
    </section>
  );
};

GetItNow.propTypes = {
  reference: PropTypes.object.isRequired,
};

export default GetItNow;
