import { Icon } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const collapsibleClass = collapsed
    ? 'navbar__collapsible'
    : 'navbar__collapsible collapsible--expanded';

  return (
    <nav className='navbar navbar--black'>
      <div className={collapsibleClass} onMouseLeave={() => setCollapsed(true)}>
        <div className='navbar__brand'>
          <Icon
            className='navbar__toggler'
            onClick={() => setCollapsed(!collapsed)}>
            menu
          </Icon>
          <p className='navbar__logo'>EXP|CON</p>
          {/* <img
            className='navbar__logo'
            src={require('../assets/img/EXPCON.svg').default}
            alt=''
          /> */}
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

export default Navbar;
