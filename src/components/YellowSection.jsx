import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import CustomCursor from './common/CustomCursor';
import CursorPosition from '../hooks/CursorPosition';

const YellowSection = ({ reference }) => {
  const [isTracking, setIsTracking] = useState(false);
  const maskRef = useRef(null);
  const textMaskRef = useRef(null);
  const maskDiameter = 345;
  const { x, y } = CursorPosition();

  const getMaskPosition = (maskReference, axis) => {
    return axis === 'x'
      ? x - maskReference.getBoundingClientRect().left - maskDiameter / 2
      : y - maskReference.getBoundingClientRect().top - maskDiameter / 2;
  };

  const handleMouseMove = (e) => {
    if (isTracking) {
      maskRef.current.style.setProperty(
        '--x',
        `${getMaskPosition(maskRef.current, 'x')}px`
      );
      maskRef.current.style.setProperty(
        '--y',
        `${getMaskPosition(maskRef.current, 'y')}px`
      );
      textMaskRef.current.style.setProperty(
        '--x',
        `${getMaskPosition(textMaskRef.current, 'x')}px`
      );
      textMaskRef.current.style.setProperty(
        '--y',
        `${getMaskPosition(textMaskRef.current, 'y')}px`
      );
    }
  };

  return (
    <section
      id='yellow-section'
      className='yellow-section'
      ref={reference}
      onMouseEnter={() => setIsTracking(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsTracking(false)}>
      <img className='yellow-section__bg masked' src='img/Image 4.png' alt='' />
      {isTracking ? (
        <React.Fragment>
          <CustomCursor cursorMessage='Reveal' cursorType='circle' />
          <img
            className='yellow-section__bg masked--motion'
            src='img/Image 4.png'
            alt=''
            ref={maskRef}
          />
        </React.Fragment>
      ) : null}

      <div className='section__content'>
        <h2 className='section__heading uppercase'>Front Row Seats</h2>
        <p className='section__text'>
          Experience Experience concerts up close and personal.
        </p>
        <button className='btn btn--small btn--white btn--yellow'>
          See Demo
        </button>
      </div>
      <div className='section__content masked--motion' ref={textMaskRef}>
        <h2 className='section__heading uppercase'>Front Row Seats</h2>
        <p className='section__text'>
          Experience Experience concerts up close and personal.
        </p>
        <button className='btn btn--small btn--white btn--blue'>
          See Demo
        </button>
      </div>
    </section>
  );
};

YellowSection.propTypes = {
  reference: PropTypes.object.isRequired,
};

export default YellowSection;
