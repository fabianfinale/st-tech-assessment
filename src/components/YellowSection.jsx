import React from 'react';
import PropTypes from 'prop-types';

const YellowSection = ({ reference }) => {
  return <section className='yellow-section' ref={reference}></section>;
};

YellowSection.propTypes = {
  reference: PropTypes.object.isRequired,
};

export default YellowSection;
