import React from 'react';
import PropTypes from 'prop-types';
import Review from './common/Review';

const Reviews = ({ reference }) => {
  return (
    <section id='reviews-section' className='reviews-section' ref={reference}>
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
          <Review
            author='Artist'
            review='“Love it, it’s the Best.I can’t live without it!”'
          />
          <Review
            author='Producer'
            review='“Love it, it’s the Best.I can’t live without it!”'
          />
          <Review
            author='Music Fan'
            review='“Love it, it’s the Best.I can’t live without it!”'
          />
        </div>
      </div>
    </section>
  );
};

Reviews.propTypes = {
  reference: PropTypes.object.isRequired,
};

export default Reviews;
