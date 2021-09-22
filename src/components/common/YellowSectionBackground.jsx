import React from 'react';
import PropTypes from 'prop-types';

const YellowSectionBackground = ({ maskType, reference }) => {
  const maskTypes = {
    static: 'masked',
    motion: 'masked--motion',
  };

  return (
    <img
      className={`yellow-section__bg ${maskTypes[maskType]}`}
      src='img/Image 4.png'
      alt=''
      ref={reference}
    />
  );
};

YellowSectionBackground.propTypes = {
  maskType: PropTypes.oneOf(['static', 'motion']).isRequired,
  reference: PropTypes.object,
};

YellowSectionBackground.defaultProps = {
  maskType: 'static',
};

export default YellowSectionBackground;
