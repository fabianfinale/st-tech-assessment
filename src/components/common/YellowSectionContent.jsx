import React from 'react';
import PropTypes from 'prop-types';
import CTAButton from './CTAButton';

const YellowSectionContent = ({ mask, reference }) => {
  return (
    <div
      className={`section__content ${mask ? 'masked--motion' : ''}`}
      ref={reference}>
      <h2 className='section__heading uppercase'>Front Row Seats</h2>
      <p className='section__text'>
        Experience Experience concerts up close and personal.
      </p>
      <CTAButton
        btnClasses={`btn--small btn--${mask ? 'blue' : 'yellow'}`}
        text='See Demo'
      />
    </div>
  );
};

YellowSectionContent.propTypes = {
  mask: PropTypes.bool.isRequired,
  reference: PropTypes.object,
};

YellowSectionContent.defaultProps = {
  mask: false,
};

export default YellowSectionContent;
