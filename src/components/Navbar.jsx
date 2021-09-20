import { Icon } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CursorPosition from '../hooks/CursorPosition';

const Navbar = ({ scrollPosition, reference }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [isTracking, setIsTracking] = useState(false);
  const { x, y } = CursorPosition();

  const handleMouseMove = (e) => {
    if (isTracking) {
      e.target.style.setProperty('--x', `${x - e.target.offsetLeft}px`);
      e.target.style.setProperty('--y', `${y - e.target.offsetTop}px`);
    }
  };

  const navbarColor = {
    header: 'navbar--header',
    redSection: 'navbar--red',
    yellowSection: 'navbar--yellow',
    perksSection: 'navbar--black',
    reviewsSection: 'navbar--blue',
    getItNowSection: 'navbar--get-it-now',
  };

  const collapsibleClass = collapsed
    ? 'navbar__collapsible'
    : 'navbar__collapsible collapsible--expanded';

  return (
    <nav className={`navbar ${navbarColor[scrollPosition]}`} ref={reference}>
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
      <button
        className='btn btn__white btn--extra-small btn--cta'
        onMouseEnter={() => setIsTracking(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setIsTracking(false)}>
        <span className='btn__text'>Try it now</span>
      </button>
    </nav>
  );
};

Navbar.propTypes = {
  scrollPosition: PropTypes.string.isRequired,
  reference: PropTypes.object.isRequired,
};
export default Navbar;
