import React from 'react';
import styles from './styles.module.css';
import { Progress } from 'radix-ui';
import { useResponsive } from '../../utils/hooks/useResponsive';
import { getSizeFromBreakpoint } from '../../utils/breakpoints/breakpoints';

interface BogProgressProps extends React.ComponentProps<typeof Progress.Root> {
  /** A number prop that indicates what percentage (from 0 - 100) the indicator should show. */
  value: number;
  /** A boolean prop that serves as a flag whether to show the percentage text next to the progress bar or not. */
  showPercentage: boolean;
  /** The color of the progress bar indicator.
   * Accepts status names (success, error, info, warning, and brand) as well as hex codes and valid color names.
   * Defaults to brand color when given an invalid color.  */
  color: string;
  /** The height of the progress bar. */
  size?: 'small' | 'medium' | 'large' | 'responsive';
  /**  Additional class names to apply styles to the progress bar. These can be tailwind classes or custom CSS classes. */
  className?: string;
  /** Additional CSS styles to apply to the progress bar. */
  style?: React.CSSProperties;
}

export default function BogProgress({
  value,
  showPercentage,
  color,
  size = 'responsive',
  className,
  style,
  ...props
}: BogProgressProps) {
  // Restricts progress value between 0 to 100
  if (value > 100) {
    value = 100;
  } else if (value < 0) {
    value = 0;
  }

  // Maps semantic meanings to global color variable
  const colorMap: Record<string, string> = {
    success: 'var(--color-status-green-text)',
    error: 'var(--color-status-red-text)',
    info: 'var(--color-status-blue-text)',
    warning: 'var(--color-status-amber-text)',
    brand: 'var(--color-brand-text)',
  };
  let colorCode = color;
  // Get hex code from globals.css if it matches one of the color themes
  // Set it to brand color if the color received is not valid
  if (color in colorMap) {
    colorCode = colorMap[color];
  } else if (!CSS.supports('color', color)) {
    colorCode = colorMap['brand'];
  }
  // Otherwise by default the color stays the same; accepts hex codes and valid color names

  const breakpoint = useResponsive();
  const responsiveSize =
    size === 'responsive' ? getSizeFromBreakpoint(breakpoint) : size;

  return (
    <div className={`${styles.container} ${className}`} style={style}>
      <Progress.Root
        className={`${styles.root} ${styles[responsiveSize]}`}
        value={value}
        {...props}
      >
        <Progress.Indicator
          className={styles.indicator}
          style={{ width: `${value}%`, backgroundColor: `${colorCode}` }}
        />
      </Progress.Root>
      {showPercentage && <span className={styles.label}>{value}%</span>}
    </div>
  );
}
