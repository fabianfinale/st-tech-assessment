import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import CustomCursor from './common/CustomCursor';
import useCursorPosition from '../hooks/useCursorPosition';
import YellowSectionBackground from './common/YellowSectionBackground';
import YellowSectionContent from './common/YellowSectionContent';

const YellowSection = ({ reference }) => {
  const [isTracking, setIsTracking] = useState(false);
  const maskRef = useRef(null);
  const textMaskRef = useRef(null);
  const maskDiameter = 345;
  const { x, y } = useCursorPosition();

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
      <YellowSectionBackground />
      {isTracking ? (
        <React.Fragment>
          <CustomCursor cursorMessage='Reveal' cursorType='circle' />
          <YellowSectionBackground maskType='motion' reference={maskRef} />
        </React.Fragment>
      ) : null}

      <YellowSectionContent />
      <YellowSectionContent mask={true} reference={textMaskRef} />
    </section>
  );
};

YellowSection.propTypes = {
  reference: PropTypes.object.isRequired,
};

export default YellowSection;
