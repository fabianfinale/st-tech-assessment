import React from 'react';
import PropTypes from 'prop-types';

const GetItNow = ({ reference }) => {
  return <section className='get-it-now-section' ref={reference}></section>;
};

GetItNow.propTypes = {
  reference: PropTypes.object.isRequired,
};

export default GetItNow;
