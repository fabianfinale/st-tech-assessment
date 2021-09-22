import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import GetItNow from './GetItNot';
import Header from './Header';
import Perks from './Perks';
import RedSection from './RedSection';
import Reviews from './Reviews';
import YellowSection from './YellowSection';
import useScrollPosition from '../hooks/useScrollPosition';

const LandingPage = ({ navbarRef, setScrollPosition }) => {
  const headerRef = useRef(null);
  const redSectionRef = useRef(null);
  const yellowSectionRef = useRef(null);
  const perksSectionRef = useRef(null);
  const reviewsSectionRef = useRef(null);
  const getItNowSectionRef = useRef(null);

  const scrollPosition = useScrollPosition(
    {
      headerRef,
      redSectionRef,
      yellowSectionRef,
      perksSectionRef,
      reviewsSectionRef,
      getItNowSectionRef,
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
    <main>
      <Header reference={headerRef} />
      <RedSection reference={redSectionRef} />
      <YellowSection reference={yellowSectionRef} />
      <Perks reference={perksSectionRef} />
      <Reviews reference={reviewsSectionRef} />
      <GetItNow reference={getItNowSectionRef} />
    </main>
  );
};

LandingPage.propTypes = {
  navbarRef: PropTypes.object.isRequired,
  setScrollPosition: PropTypes.func.isRequired,
};

export default LandingPage;
