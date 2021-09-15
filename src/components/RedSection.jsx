import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import CustomCursor from './common/CustomCursor';

const RedSection = ({ reference }) => {
  const [cursorType, setCursorType] = useState('pointer');
  const [isPlaying, setIsPlaying] = useState(false);
  const audioElement = useRef(null);

  useEffect(() => {
    audioElement.current = new Audio('audio/bensound-hey.mp3');
  }, []);

  const handleMove = (e) => {
    setCursorType('circle');
  };

  const handleClick = () => {
    !isPlaying ? audioElement.current.play() : audioElement.current.pause();
    setIsPlaying(!isPlaying);
  };

  return (
    <section className='red-section' ref={reference}>
      {cursorType !== 'pointer' ? (
        <CustomCursor cursorMessage='Click' cursorType={cursorType} />
      ) : null}
      <div className='section__content'>
        <h2 className='section__heading uppercase'>Superior sound</h2>
        <p className='section__text'>
          Experience live versions of your favourite songs.
        </p>
        <button className='btn btn--small btn--white btn--red'>See Demo</button>
      </div>
      <div
        className='section__images'
        onClick={handleClick}
        onMouseEnter={handleMove}
        onMouseLeave={() => setCursorType('pointer')}>
        <img src={require('../assets/img/medium17.png').default} alt='' />
        <img src={require('../assets/img/medium27.png').default} alt='' />
      </div>
    </section>
  );
};

RedSection.propTypes = {
  reference: PropTypes.object.isRequired,
};

export default RedSection;
