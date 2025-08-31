import { useState, useEffect } from 'react';
import { breakpoints } from '../breakpoints/breakpoints';

function getBreakpoint(width: number) {
  const entries = Object.entries(breakpoints).reverse();
  for (const [label, minWidth] of entries) {
    if (width >= minWidth) {
      return label;
    }
  }
  return entries[0][0];
}

export function useResponsive() {
  const [breakpoint, setBreakpoint] = useState(() => getBreakpoint(window.innerWidth));

  useEffect(() => {
    const handleResize = () => setBreakpoint(getBreakpoint(window.innerWidth));
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoint;
}
