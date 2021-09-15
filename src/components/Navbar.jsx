import { Icon } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ scrollPosition }) => {
  const [collapsed, setCollapsed] = useState(true);

  const navbarColor = {
    header: 'navbar--primary',
    redSection: 'navbar--primary',
    yellowSection: 'navbar--yellow',
    perksSection: 'navbar--black',
    reviewsSection: 'navbar--blue',
    getItNowSection: 'navbar--black',
  };

  const collapsibleClass = collapsed
    ? 'navbar__collapsible'
    : 'navbar__collapsible collapsible--expanded';

  return (
    <nav className={`navbar ${navbarColor[scrollPosition]}`}>
      <div className={collapsibleClass} onMouseLeave={() => setCollapsed(true)}>
        <div className='navbar__brand'>
          <Icon
            className='navbar__toggler'
            onClick={() => setCollapsed(!collapsed)}>
            menu
          </Icon>
          <p className='navbar__logo'>EXP|CON</p>
        </div>
        <div className='collapsible__shape'></div>
        <div className='collapsible__content'>
          <ul className='nav__list'>
            <li>
              <Link className='nav__item' to='#'>
                What is it
              </Link>
            </li>
            <li>
              <Link className='nav__item' to='#'>
                Perks
              </Link>
            </li>
            <li>
              <Link className='nav__item' to='#'>
                Pricing
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  scrollPosition: PropTypes.string.isRequired,
};
export default Navbar;
