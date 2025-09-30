import React from 'react';
import { Card } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { useResponsive } from '../../utils/hooks/useResponsive';
import { getNumericalSizeFromBreakpoint } from '../../utils/breakpoints/breakpoints';
import styles from './styles.module.css';

type SizeToken = 'small' | 'medium' | 'large' | 'responsive';
type RadixSize = '1' | '2' | '3';

interface BogCardProps extends Omit<React.ComponentProps<typeof Card>, 'size'> {
  children?: React.ReactNode;
  variant?: 'surface' | 'classic' | 'ghost';
  size?: SizeToken;
  className?: string;
  style?: React.CSSProperties;
  asChild?: boolean;
  [key: string]: any;
}

export default function BogCard({
  children,
  className,
  style,
  variant = 'surface',
  size = 'responsive',
  ...rest
}: BogCardProps) {
  const currentBreakpoint = useResponsive();

  const resolvedSize: RadixSize =
    size === 'responsive'
      ? getNumericalSizeFromBreakpoint(currentBreakpoint)
      : ({ small: '1', medium: '2', large: '3' } as const)[size ?? 'medium'];

  const radiusBySize: Record<RadixSize, number> = { '1': 12, '2': 16, '3': 20 };
  const resolvedRadius = radiusBySize[resolvedSize] ?? 16;

  const sizeClass = `size${resolvedSize}`;

  return (
    <Card
      {...rest}
      variant={variant}
      data-variant={variant}
      size={resolvedSize}
      className={`${styles.card} ${styles[sizeClass]}${
        className ? ` ${className}` : ''
      }`}
      style={{ borderRadius: resolvedRadius, ...style }}
    >
      {children}
    </Card>
  );
}
