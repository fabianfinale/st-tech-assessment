import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@mui/material';

const Reviews = ({ reference }) => {
  return (
    <section className='reviews-section' ref={reference}>
      <div className='section__images'>
        <img
          src={require('../assets/img/SmallSpeaker1-03.png').default}
          alt=''
        />
        <img
          src={require('../assets/img/SmallSpeaker2-03.png').default}
          alt=''
        />
      </div>
      <div className='section__content'>
        <h2 className='section__heading uppercase'>Reviews</h2>
        <div className='section__listing'>
          <div className='listing__group'>
            <div className='rating'>
              <Icon>start-rate</Icon>
              <Icon>start-rate</Icon>
              <Icon>start-rate</Icon>
              <Icon>start-rate</Icon>
              <Icon>start-rate</Icon>
            </div>
            <h3 className='listing__heading heading--white uppercase'>
              Artist
            </h3>
            <p className='listing__text text--black'>
              “Love it, it’s the Best.I can’t live without it!”
            </p>
          </div>
          <div className='listing__group'>
            <div className='rating'>
              <Icon>start-rate</Icon>
              <Icon>start-rate</Icon>
              <Icon>start-rate</Icon>
              <Icon>start-rate</Icon>
              <Icon>start-rate</Icon>
            </div>
            <h3 className='listing__heading heading--white uppercase'>
              Producer
            </h3>
            <p className='listing__text text--black'>
              “Love it, it’s the Best.I can’t live without it!”
            </p>
          </div>
          <div className='listing__group'>
            <div className='rating'>
              <Icon>start-rate</Icon>
              <Icon>start-rate</Icon>
              <Icon>start-rate</Icon>
              <Icon>start-rate</Icon>
              <Icon>start-rate</Icon>
            </div>
            <h3 className='listing__heading heading--white uppercase'>
              Music Fan
            </h3>
            <p className='listing__text text--black'>
              “Love it, it’s the Best.I can’t live without it!”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

Reviews.propTypes = {
  reference: PropTypes.object.isRequired,
};

export default Reviews;
