import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';

const Layout = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      {/* Red section */}
      {/* Yellow section */}
      {/* Perks */}
      {/* Reviews */}
      {/* Get EXP|CON now */}
      {/* Footer */}
    </BrowserRouter>
  );
};

export default Layout;
