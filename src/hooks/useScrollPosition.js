import { useEffect, useState } from 'react';

export default function useScrollPosition(
  references,
  navbarRef,
  defaultPosition = 'default-position'
) {
  const [scrollPosition, setScrollPosition] = useState(defaultPosition);

  useEffect(() => {
    const checkPosition = ({ top, bottom, height }) => {
      const navbarHeight = navbarRef.current.clientHeight;

      // Checking which component is visible, assuming the bottom of the navbar as the top boundary. For having viewport top as the boundary, the conditional to evaluate should be "top <= 0 && bottom <= height && bottom > 0"
      return (
        top <= navbarHeight &&
        bottom - navbarHeight <= height &&
        bottom > navbarHeight
      );
    };

    const scrollHandler = (event) => {
      for (const ref in references) {
        checkPosition(references[ref].current.getBoundingClientRect()) &&
          setScrollPosition(references[ref].current.id);
      }
    };

    document.addEventListener('scroll', scrollHandler);

    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [navbarRef, references]);

  return scrollPosition;
}
