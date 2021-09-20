import React from 'react';
import PropTypes from 'prop-types';

const Perks = ({ reference }) => {
  return (
    <section className='perks-section' ref={reference}>
      <div className='section__content'>
        <h2 className='section__heading uppercase'>Perks</h2>
        <div className='section__listing'>
          <div className='listing__group'>
            <h3 className='listing__heading heading--red'>
              Subscription Payment Model
            </h3>
            <p className='listing__text'>
              No commitment, cancel anytime. Never worry about forgetting a
              payment again!
            </p>
          </div>
          <div className='listing__group'>
            <h3 className='listing__heading heading--blue'>
              No Fee Cancelation Policy
            </h3>
            <p className='listing__text'>
              No commitment, cancel anytime. Never worry about forgetting a
              payment again!
            </p>
          </div>
          <div className='listing__group'>
            <h3 className='listing__heading heading--yellow'>
              Subscription Payment Model
            </h3>
            <p className='listing__text'>
              No commitment, cancel anytime. Never worry about forgetting a
              payment again!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

Perks.propTypes = {
  reference: PropTypes.object.isRequired,
};

export default Perks;
