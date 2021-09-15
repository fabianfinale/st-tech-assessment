import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import GetItNow from './components/GetItNot';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Perks from './components/Perks';
import RedSection from './components/RedSection';
import Reviews from './components/Reviews';
import YellowSection from './components/YellowSection';
import Footer from './Footer';

const Layout = () => {
  const headerRef = useRef(null);
  const redSectionRef = useRef(null);
  const yellowSectionRef = useRef(null);
  const perksSectionRef = useRef(null);
  const reviewsSectionRef = useRef(null);
  const getItNowSectionRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState('header');

  const checkPosition = ({ top, bottom, height }) => {
    if (top <= 0 && bottom < height && bottom > 0) return true;
    return false;
  };

  useEffect(() => {
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
  }, []);

  return (
    <BrowserRouter>
      <Navbar scrollPosition={scrollPosition} />
      <Header reference={headerRef} />
      <RedSection reference={redSectionRef} />
      <YellowSection reference={yellowSectionRef} />
      <Perks reference={perksSectionRef} />
      <Reviews reference={reviewsSectionRef} />
      <GetItNow reference={getItNowSectionRef} />
      <Footer />
    </BrowserRouter>
  );
};

export default Layout;
