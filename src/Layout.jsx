import React from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './Footer';

const Layout = ({ navbarRef, scrollPosition, children }) => {
  return (
    <BrowserRouter>
      <Navbar scrollPosition={scrollPosition} reference={navbarRef} />
      {children}
      <Footer />
    </BrowserRouter>
  );
};

Layout.propTypes = {
  navbarRef: PropTypes.object.isRequired,
  scrollPosition: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default Layout;
