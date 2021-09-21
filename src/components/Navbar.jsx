import { Icon } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CTAButton from './common/CTAButton';

const Navbar = ({ scrollPosition, reference }) => {
  const [collapsed, setCollapsed] = useState(true);

  const navbarColor = {
    'default-position': 'navbar--header',
    'header-section': 'navbar--header',
    'pricing-section': 'navbar--header',
    'pricing-perks-section': 'navbar--header',
    'red-section': 'navbar--red',
    'yellow-section': 'navbar--yellow',
    'perks-section': 'navbar--black',
    'reviews-section': 'navbar--blue',
    'get-it-now-section': 'navbar--get-it-now',
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
          <Link className='navbar__logo' to='/'>
            EXP|CON
          </Link>
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
      {scrollPosition === 'perks-section' ? (
        <Link
          to='/pricing'
          className='btn btn--gradient btn--extra-small'
          data-text='Try it now'>
          Try it now
        </Link>
      ) : (
        <CTAButton target='/pricing' />
      )}
    </nav>
  );
};

Navbar.propTypes = {
  scrollPosition: PropTypes.string.isRequired,
  reference: PropTypes.object.isRequired,
};
export default Navbar;
