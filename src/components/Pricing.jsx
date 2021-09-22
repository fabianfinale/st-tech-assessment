import React from 'react';
import PropTypes from 'prop-types';
import ListingGroup from './common/ListingGroup';

const Pricing = ({ reference }) => {
  return (
    <section id='pricing-section' className='pricing-section' ref={reference}>
      <div className='section__content'>
        <h2 className='section__heading uppercase'>Pricing</h2>
        <p className='section__text heading--white'>
          Test out our app today! Choose from three subscription Based payment
          models.
        </p>
        <div className='section__listing'>
          <ListingGroup
            plan='Basic'
            frequency='Monthly'
            price='9'
            items={[
              'Very good',
              'Amazing',
              'Perfect job',
              'Love this',
              'It’s so good',
              'Features',
            ]}
            ctaTarget='/payment?plan=basic'
            color='red'
          />
          <ListingGroup
            plan='Advanced'
            frequency='Yearly'
            price='99'
            items={[
              'Very very good',
              'Even Amazing',
              'Perfect job',
              'Love this more',
              'It’s so so good',
              'More Features',
            ]}
            ctaTarget='/payment?plan=advanced'
            color='yellow'
          />
          <ListingGroup
            plan='Pro'
            frequency='Yearly'
            price='120'
            items={[
              'Very very good',
              'Even more',
              'Perfect job',
              'Love this more',
              'It’s so so good',
              'More Features',
            ]}
            ctaTarget='/payment?plan=pro'
            color='blue'
          />
        </div>
      </div>
    </section>
  );
};

Pricing.propTypes = {
  reference: PropTypes.object.isRequired,
};

export default Pricing;
