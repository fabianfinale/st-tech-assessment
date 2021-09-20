import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import GetItNow from './GetItNot';
import Header from './Header';
import Perks from './Perks';
import RedSection from './RedSection';
import Reviews from './Reviews';
import YellowSection from './YellowSection';

const LandingPage = ({ navbarRef, setScrollPosition }) => {
  const headerRef = useRef(null);
  const redSectionRef = useRef(null);
  const yellowSectionRef = useRef(null);
  const perksSectionRef = useRef(null);
  const reviewsSectionRef = useRef(null);
  const getItNowSectionRef = useRef(null);

  useEffect(() => {
    const checkPosition = ({ top, bottom, height }) => {
      const navbarHeight = navbarRef.current.clientHeight;

      // Checking which component is visible, assuming the bottom of the navbar as the top boundary. For having viewport top as the boundary, the conditional to evaluate should be "top <= 0 && bottom <= height && bottom > 0"
      return (
        top <= navbarHeight && bottom - navbarHeight <= height && bottom > 0
      );
    };

    const listener = document.addEventListener('scroll', (e) => {
      checkPosition(headerRef.current.getBoundingClientRect()) &&
        setScrollPosition('header');

      checkPosition(redSectionRef.current.getBoundingClientRect()) &&
        setScrollPosition('redSection');

      checkPosition(yellowSectionRef.current.getBoundingClientRect()) &&
        setScrollPosition('yellowSection');

      checkPosition(perksSectionRef.current.getBoundingClientRect()) &&
        setScrollPosition('perksSection');

      checkPosition(reviewsSectionRef.current.getBoundingClientRect()) &&
        setScrollPosition('reviewsSection');

      checkPosition(getItNowSectionRef.current.getBoundingClientRect()) &&
        setScrollPosition('getItNowSection');
    });

    return () => {
      document.removeEventListener('scroll', listener);
    };
  }, [navbarRef, setScrollPosition]);

  return (
    <React.Fragment>
      <Header reference={headerRef} />
      <RedSection reference={redSectionRef} />
      <YellowSection reference={yellowSectionRef} />
      <Perks reference={perksSectionRef} />
      <Reviews reference={reviewsSectionRef} />
      <GetItNow reference={getItNowSectionRef} />
    </React.Fragment>
  );
};

LandingPage.propTypes = {
  navbarRef: PropTypes.object.isRequired,
  setScrollPosition: PropTypes.func.isRequired,
};

export default LandingPage;
