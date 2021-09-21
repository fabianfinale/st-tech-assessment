import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import CursorPosition from '../../hooks/CursorPosition';

const CTAButton = ({ target, btnClasses, text }) => {
  const [isTracking, setIsTracking] = useState(false);
  const { x, y } = CursorPosition();

  const handleMouseMove = (e) => {
    if (isTracking) {
      e.target.style.setProperty(
        '--x',
        `${x - e.target.getBoundingClientRect().left}px`
      );
      e.target.style.setProperty(
        '--y',
        `${y - e.target.getBoundingClientRect().top}px`
      );
    }
  };
  return (
    <Link
      to={target}
      className={`btn btn--white btn--cta ${btnClasses}`}
      onMouseEnter={() => setIsTracking(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsTracking(false)}>
      <span className='btn__text'>{text}</span>
    </Link>
  );
};

CTAButton.propTypes = {
  target: PropTypes.string.isRequired,
  btnClasses: PropTypes.string,
  text: PropTypes.string,
};

CTAButton.defaultProps = {
  target: '#',
  btnClasses: 'btn--extra-small',
  text: 'Try it now',
};

export default CTAButton;
