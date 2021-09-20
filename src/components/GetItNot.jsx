import React from 'react';
import PropTypes from 'prop-types';

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
      <div className='section__cta'>
        <button className='btn btn--gradient' data-text='Try it now'>
          Try it now
        </button>
      </div>
    </section>
  );
};

GetItNow.propTypes = {
  reference: PropTypes.object.isRequired,
};

export default GetItNow;
