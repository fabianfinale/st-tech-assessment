import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import CarouselIndicators from './CarouselIndicators';
import { WebGLTransition } from '../../utils/WebGLTransition';

const Carousel = ({ className, items }) => {
  const [index, setIndex] = useState(items[0].id);
  const slider = useRef(null);

  const webGLTransition = useRef(null);

  useEffect(() => {
    webGLTransition.current = new WebGLTransition(
      slider.current,
      items.map((image) => image.imagePath),
      setIndex
    );

    const interval = setInterval(() => {
      webGLTransition.current.next();
    }, 10000);

    return () => clearInterval(interval);
  }, [items]);

  const handleChange = (id) => {
    webGLTransition.current.goTo(id);
  };

  return (
    <div className={className} ref={slider}>
      <CarouselIndicators items={items} index={index} onClick={handleChange} />
    </div>
  );
};

Carousel.propTypes = {
  items: PropTypes.array.isRequired,
  className: PropTypes.string,
};

export default Carousel;
