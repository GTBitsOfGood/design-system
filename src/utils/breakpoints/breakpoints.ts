export const breakpoints = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
};

export const getSizeFromBreakpoint = (
  breakpoint: string,
): 'small' | 'medium' | 'large' => {
  if (breakpoint === 'mobile') return 'small';
  if (breakpoint === 'tablet') return 'medium';
  return 'large';
};
