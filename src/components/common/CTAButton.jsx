import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import CursorPosition from '../../hooks/CursorPosition';

const CTAButton = ({ to, btnClasses }) => {
  const [isTracking, setIsTracking] = useState(false);
  const { x, y } = CursorPosition();

  const handleMouseMove = (e) => {
    console.log(`isTracking`, isTracking);
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
      to='/pricing'
      className={`btn btn--white btn--cta ${btnClasses}`}
      onMouseEnter={() => setIsTracking(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsTracking(false)}>
      <span className='btn__text'>Try it now</span>
    </Link>
  );
};

CTAButton.propTypes = {
  target: PropTypes.string.isRequired,
  btnClasses: PropTypes.string,
};

CTAButton.defaultProps = {
  target: '#',
  btnClasses: 'btn--extra-small',
};

export default CTAButton;
