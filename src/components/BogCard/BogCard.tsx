import React from 'react';
import { Card } from '@radix-ui/themes';
import clsx from 'clsx';
import styles from './styles.module.css';
import { useResponsive } from '../../utils/design-system/hooks/useResponsive';
import { getAltNumericalSizeFromBreakpoint } from '../../utils/design-system/breakpoints/breakpoints';

export interface BogCardProps
  extends Omit<
    React.ComponentProps<typeof Card>,
    'size' | 'variant' | 'asChild'
  > {
  variant?: 'surface' | 'classic' | 'ghost';
  size?: '1' | '2' | '3' | '4' | '5' | 'responsive';
  asChild?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export default function BogCard({
  variant = 'classic',
  size = 'responsive',
  className,
  style,
  children,
  asChild,
  ...props
}: BogCardProps) {
  const breakpoint = useResponsive();
  const resolvedNumericSize =
    size === 'responsive'
      ? getAltNumericalSizeFromBreakpoint(breakpoint)
      : size;

  const sizeClass = styles[
    `size${resolvedNumericSize}` as keyof typeof styles
  ] as string;

  return (
    <Card
      {...props}
      asChild={asChild}
      className={clsx(styles.card, sizeClass, className)}
      style={style}
      data-size={resolvedNumericSize}
      data-variant={variant}
    >
      {children}
    </Card>
  );
}
