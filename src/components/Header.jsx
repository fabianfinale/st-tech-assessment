import React from 'react';
import { headerImages } from '../utils/headerImages';
import Carousel from './common/Carousel';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ reference }) => {
  const dataImages = headerImages.map((image) => image.imagePath);

  return (
    <header id='header' className='header' ref={reference}>
      <Carousel
        className='header__carousel slider'
        items={headerImages}
        dataImages={dataImages}
      />
      <div className='header__content'>
        <h1 className='header__title uppercase text-shadow-sm'>
          Interactive Concert Experience
        </h1>
        <p className='header__subtitle text-shadow-xs'>
          Experience your favourite artists like never before and from the
          comfort of your own home.
        </p>
        <Link
          to='/pricing'
          className='btn btn--gradient'
          data-text='Try it now'>
          Try it now
        </Link>
      </div>
    </header>
  );
};

Header.propTypes = {
  reference: PropTypes.object.isRequired,
};

export default Header;
