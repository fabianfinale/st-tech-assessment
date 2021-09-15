import React from 'react';
import PropTypes from 'prop-types';

const RedSection = ({ reference }) => {
  return <section className='red-section' ref={reference}></section>;
};

RedSection.propTypes = {
  reference: PropTypes.object.isRequired,
};

export default RedSection;
