import * as React from 'react';
import { Badge, type BadgeProps } from '@radix-ui/themes';
import styles from './styles.module.css';
import { useResponsive } from '../../utils/hooks/useResponsive';
import BogIcon from '../BogIcon/BogIcon';
import { getNumericalSizeFromBreakpoint } from '../../utils/breakpoints/breakpoints';

export type BogChipState = 'complete' | 'failure' | 'in-progress' | 'in-review';

export interface BogChipProps
  extends Omit<React.ComponentProps<typeof Badge>, 'size'> {
  size?: '1' | '2' | '3' | 'responsive';
  color?: BadgeProps['color'];
  highContrast?: boolean;
  asChild?: boolean;
  radius?: BadgeProps['radius'];
  state?: BogChipState;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}

const iconPxBySize: Record<'1' | '2' | '3', number> = {
  '1': 12,
  '2': 16,
  '3': 18,
};

const sizeMap: Record<'1' | '2' | '3', string> = {
  '1': styles.small,
  '2': styles.medium,
  '3': styles.large,
};

export default function BogChip({
  asChild,
  children,
  size = 'responsive',
  color,
  highContrast = false,
  radius = 'full',
  state = undefined,
  className,
  style,
  ...rest
}: BogChipProps) {
  const breakpoint = useResponsive();
  const responsiveSize: '1' | '2' | '3' =
    size === 'responsive' ? getNumericalSizeFromBreakpoint(breakpoint) : size;

  const defaultStateChildren: Record<BogChipState, React.ReactNode> = {
    complete: (
      <div className={styles.contentContainer}>
        <BogIcon name="check" size={iconPxBySize[responsiveSize]} />
        <span>Complete</span>
      </div>
    ),
    failure: (
      <div className={styles.contentContainer}>
        <BogIcon name="x" size={iconPxBySize[responsiveSize]} />
        <span>Failure</span>
      </div>
    ),
    'in-progress': (
      <div className={styles.contentContainer}>
        <BogIcon name="warning" size={iconPxBySize[responsiveSize]} />
        <span>In Progress</span>
      </div>
    ),
    'in-review': (
      <div className={styles.contentContainer}>
        <BogIcon name="info" size={iconPxBySize[responsiveSize]} />
        <span>In Review</span>
      </div>
    ),
  };

  const content = state ? defaultStateChildren[state] : children;

  return (
    <Badge
      asChild={asChild}
      color={color}
      highContrast={highContrast}
      radius={radius}
      className={`${styles.chip} ${className} ${sizeMap[responsiveSize]} ${radius ? styles[`radius-${radius}`] : ''} ${state ? styles[state] : ''}`}
      style={style}
      {...rest}
    >
      {content}
    </Badge>
  );
}
