import React from 'react';
import PropTypes from 'prop-types';
import CarouselIndicator from './CarouselIndicator';

const CarouselIndicators = ({ items, index, onClick: handleClick }) => {
  return (
    <div className='carousel__indicators'>
      {items.map((item) => (
        <CarouselIndicator
          key={item.id}
          id={item.id}
          onClick={handleClick}
          isActive={item.id === index}
        />
      ))}
    </div>
  );
};

CarouselIndicators.propTypes = {
  items: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

CarouselIndicators.defaultProps = {
  index: 0,
};

export default CarouselIndicators;
