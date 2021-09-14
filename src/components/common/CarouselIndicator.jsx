import React from 'react';
import PropTypes from 'prop-types';

const CarouselIndicator = ({ onClick: handleClick, isActive, id }) => {
  return (
    <button
      className={`carousel__indicator ${isActive ? 'active' : ''}`}
      onClick={() => handleClick(id)}></button>
  );
};

CarouselIndicator.propTypes = {
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default CarouselIndicator;
