import React from 'react';
import 'custom-cursor-react/dist/index.css';
import CursorPosition from '../../hooks/CursorPosition';
import PropTypes from 'prop-types';

const CustomCursor = ({ cursorType, cursorMessage }) => {
  const cursorClasses = {
    pointer: 'custom-cursor',
    circle: 'custom-cursor--circle',
    shade: 'custom-cursor--shade',
  };

  const { x, y } = CursorPosition();
  return (
    <div
      className={`custom-cursor ${cursorClasses[cursorType]}`}
      style={{ left: `${x}px`, top: `${y}px` }}>
      {cursorMessage.toUpperCase()}
    </div>
  );
};

CustomCursor.propTypes = {
  cursorType: PropTypes.oneOf(['pointer', 'circle', 'shade']).isRequired,
  cursorMessage: PropTypes.string,
};

CustomCursor.defaultProps = {
  cursorType: 'pointer',
  cursorMessage: '',
};

export default CustomCursor;
