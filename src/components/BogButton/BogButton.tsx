import React, { ButtonHTMLAttributes, ReactNode, CSSProperties } from 'react';
import styles from './styles.module.css';
import { useResponsive } from '../../utils/hooks/useResponsive';
import { getSizeFromBreakpoint } from '../../utils/breakpoints/breakpoints';

interface BogButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** The type of the button. Values are "primary", "secondary", or "tertiary" */
  variant?: 'primary' | 'secondary' | 'tertiary';
  /** The size of the button. Values are "small", "medium", "large", or "responsive" which
   * makes the button automatically resize with the screen. */
  size?: 'small' | 'medium' | 'large' | 'responsive';
  /**
   * The icon to display in the button.
   * This is an object containing the React node of the icon
   * to display and whether to place it on the left or right side
   * of the button.
   * */
  icon?: {
    icon: ReactNode;
    position: 'left' | 'right';
  };
  /** The name of the data this button represents for forms. */
  name?: string;
  /** The value of the data this button represents for forms. */
  value?: string;
  /** The content that appears inside the button. */
  children: ReactNode;
  /** Additional class names to apply styles to the button. These can be tailwind classes or custom CSS classes. */
  className?: string;
  /** Additional CSS styles to apply to the button. */
  style?: CSSProperties;
}

export default function BogButton({
  variant = 'primary',
  size = 'responsive',
  icon,
  name,
  value,
  children,
  className,
  ...props
}: BogButtonProps) {
  const breakpoint = useResponsive();
  const responsiveSize = size === 'responsive' ? getSizeFromBreakpoint(breakpoint) : size;

  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[responsiveSize]} ${className}`}
      name={name}
      value={value}
      {...props}
    >
      <div className={`${styles.contentContainer}`}>
        {icon && icon.position === 'left' && icon.icon}
        {children}
        {icon && icon.position === 'right' && icon.icon}
      </div>
    </button>
  );
}
