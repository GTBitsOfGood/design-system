import * as RadixSwitch from '@radix-ui/react-switch';
import styles from './styles.module.css';
import { useResponsive } from '@/utils/hooks/useResponsive';
import { getSizeFromBreakpoint } from '@/utils/breakpoints/breakpoints';
import React from 'react';

interface BogSwitchProps extends React.ComponentPropsWithoutRef<typeof RadixSwitch.Root> {
  /** The label text next to the switch. */
  label?: string;
  /** The size of the switch. */
  size?: 'small' | 'medium' | 'large' | 'responsive';
  /** Additional class names to apply styles to the switch. These can be tailwind classes or custom CSS classes. */
  className?: string;
  /** Additional CSS styles to apply to the switch. */
  style?: React.CSSProperties;
}

const BogSwitch: React.FC<BogSwitchProps> = ({ label, size = 'responsive', className, style, ...props }) => {
  const breakpoint = useResponsive();
  const responsiveSize = size === 'responsive' ? getSizeFromBreakpoint(breakpoint) : size;

  const containerClass = `${styles['bog-switch-container']} ${className || ''}`.trim();
  const rootClass = `${styles['bog-switch']} ${
    responsiveSize === 'small'
      ? styles['bog-switch-small']
      : responsiveSize === 'medium'
        ? styles['bog-switch-medium']
        : styles['bog-switch-large']
  }`.trim();
  const thumbClass = `${styles['bog-switch-thumb']} ${
    responsiveSize === 'small'
      ? styles['bog-switch-thumb-small']
      : responsiveSize === 'medium'
        ? styles['bog-switch-thumb-medium']
        : styles['bog-switch-thumb-large']
  }`.trim();
  return (
    <div className={containerClass} style={style}>
      <RadixSwitch.Root className={rootClass} {...props}>
        <RadixSwitch.Thumb className={thumbClass} />
      </RadixSwitch.Root>
      {label && <span className={styles['bog-switch-label']}>{label}</span>}
    </div>
  );
};

export default BogSwitch;
