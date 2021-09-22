import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@mui/material';

const Review = ({ author, review }) => {
  return (
    <article className='listing__group'>
      <div className='rating'>
        {Array.from(Array(5).keys()).map((index) => (
          <Icon key={index}>start-rate</Icon>
        ))}
      </div>
      <h3 className='listing__heading heading--white uppercase'>{author}</h3>
      <p className='listing__text text--black'>{review}</p>
    </article>
  );
};

Review.propTypes = {
  author: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
};

export default Review;
