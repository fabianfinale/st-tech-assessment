import React from 'react';
import PropTypes from 'prop-types';

const Reviews = ({ reference }) => {
  return <section className='reviews-section' ref={reference}></section>;
};

Reviews.propTypes = {
  reference: PropTypes.object.isRequired,
};

export default Reviews;
