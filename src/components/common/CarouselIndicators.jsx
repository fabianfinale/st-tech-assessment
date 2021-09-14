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
        // <button
        //   key={item.id}
        //   className={`carousel__indicator ${item.id === index ? 'active' : ''}`}
        //   onClick={() => handleClick(item.id)}></button>
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
