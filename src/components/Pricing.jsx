import React from 'react';
import PropTypes from 'prop-types';

const Pricing = ({ reference }) => {
  return (
    <section id='pricing' className='pricing-section' ref={reference}>
      <div className='section__content'>
        <h2 className='section__heading uppercase'>Pricing</h2>
        <p className='section__text heading--white'>
          Test out our app today! Choose from three subscription Based payment
          models.
        </p>
        <div className='section__listing'>
          <div className='listing__group'>
            <h3 className='listing__heading heading--red'>Basic</h3>
            <h3 className='listing__heading heading--red'>Monthly</h3>
            <h3 className='listing__heading heading--red price'>$9</h3>
            <ul className='listing__text list'>
              <li className='list__item'>Very good</li>
              <li className='list__item'>Amazing</li>
              <li className='list__item'>Perfect job</li>
              <li className='list__item'>Love this</li>
              <li className='list__item'>It’s so good</li>
              <li className='list__item'>Features</li>
            </ul>
            <button className='btn btn--small btn--white btn--red btn--colored'>
              Select
            </button>
          </div>
          <div className='listing__group'>
            <h3 className='listing__heading heading--blue'>Advanced</h3>
            <h3 className='listing__heading heading--blue'>Yearly</h3>
            <h3 className='listing__heading heading--blue price'>$99</h3>
            <ul className='listing__text list'>
              <li className='list__item'>Very very good</li>
              <li className='list__item'>Even Amazing</li>
              <li className='list__item'>Perfect job</li>
              <li className='list__item'>Love this more</li>
              <li className='list__item'>It’s so so good</li>
              <li className='list__item'>More Features</li>
            </ul>
            <button className='btn btn--small btn--white btn--yellow btn--colored'>
              Select
            </button>
          </div>
          <div className='listing__group'>
            <h3 className='listing__heading heading--yellow'>Pro</h3>
            <h3 className='listing__heading heading--yellow'>Yearly</h3>
            <h3 className='listing__heading heading--yellow price'>$120</h3>
            <ul className='listing__text list'>
              <li className='list__item'>Very very good</li>
              <li className='list__item'>Even more</li>
              <li className='list__item'>Perfect job</li>
              <li className='list__item'>Love this more</li>
              <li className='list__item'>It’s so so good</li>
              <li className='list__item'>More Features</li>
            </ul>
            <button className='btn btn--small btn--white btn--blue btn--colored'>
              Select
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

Pricing.propTypes = {
  reference: PropTypes.object.isRequired,
};

export default Pricing;
