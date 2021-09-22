import { useEffect, useState } from 'react';

export default function useCursorPosition() {
  const [cursorPosition, setCursorPosition] = useState({ x: null, y: null });

  useEffect(() => {
    const mouseMoveHandler = (event) => {
      const { clientX, clientY } = event;
      setCursorPosition({ x: clientX, y: clientY });
    };
    document.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  return cursorPosition;
}
