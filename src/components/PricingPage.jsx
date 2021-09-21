import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Perks from './Perks';
import Pricing from './Pricing';
import ScrollPosition from '../hooks/ScrollPosition';

const PricingPage = ({ navbarRef, setScrollPosition }) => {
  const pricingRef = useRef(null);
  const pricingPerksSectionRef = useRef(null);

  const scrollPosition = ScrollPosition(
    {
      pricingRef,
      pricingPerksSectionRef,
    },
    navbarRef
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setScrollPosition(scrollPosition);
  }, [scrollPosition, setScrollPosition]);

  return (
    <main className='pricing'>
      <Pricing reference={pricingRef} />
      <Perks id='pricing-perks-section' reference={pricingPerksSectionRef} />
    </main>
  );
};

PricingPage.propTypes = {
  navbarRef: PropTypes.object.isRequired,
  setScrollPosition: PropTypes.func.isRequired,
};

export default PricingPage;
