import React from 'react';
import PropTypes from 'prop-types';

const Perks = ({ reference }) => {
  return <section className='perks-section' ref={reference}></section>;
};

Perks.propTypes = {
  reference: PropTypes.object.isRequired,
};

export default Perks;
