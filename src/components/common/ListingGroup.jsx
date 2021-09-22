import React from 'react';
import PropTypes from 'prop-types';
import CTAButton from './CTAButton';

const ListingGroup = ({ plan, frequency, price, items, ctaTarget, color }) => {
  return (
    <article className='listing__group'>
      <h3 className={`listing__heading heading--${color}`}>{plan}</h3>
      <h3 className={`listing__heading heading--${color}`}>{frequency}</h3>
      <h3 className={`listing__heading heading--${color} price`}>${price}</h3>
      <ul className='listing__text list'>
        {items.map((item) => (
          <li key={item} className='list__item'>
            {item}
          </li>
        ))}
      </ul>
      <CTAButton
        btnClasses={`btn--small btn--${color} btn--colored`}
        text='Select'
        target={ctaTarget}
      />
    </article>
  );
};

ListingGroup.propTypes = {
  plan: PropTypes.string.isRequired,
  frequency: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  ctaTarget: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['yellow', 'red', 'blue']).isRequired,
};

export default ListingGroup;
