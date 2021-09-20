import { Icon } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <a className='footer__link' href='mailto:support@experienceconcerts.co'>
        <Icon>mail</Icon>
        support@experienceconcerts.co
      </a>
      <h2 className='footer__brand'>EXP|CON</h2>
      <p className='footer__copyright'>
        2019 &copy; All Rights Reserved | Speer Technologies Incorporated
      </p>
    </footer>
  );
};

export default Footer;
