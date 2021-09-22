import React from 'react';
import 'custom-cursor-react/dist/index.css';
import PropTypes from 'prop-types';
import useCursorPosition from '../../hooks/useCursorPosition';

const CustomCursor = ({ cursorType, cursorMessage }) => {
  const cursorClasses = {
    pointer: 'custom-cursor',
    circle: 'custom-cursor--circle',
  };

  const { x, y } = useCursorPosition();
  return (
    <div
      className={`custom-cursor ${cursorClasses[cursorType]}`}
      style={{ left: `${x}px`, top: `${y}px` }}>
      {cursorMessage.toUpperCase()}
    </div>
  );
};

CustomCursor.propTypes = {
  cursorType: PropTypes.oneOf(['pointer', 'circle']).isRequired,
  cursorMessage: PropTypes.string,
};

CustomCursor.defaultProps = {
  cursorType: 'pointer',
  cursorMessage: '',
};

export default CustomCursor;
