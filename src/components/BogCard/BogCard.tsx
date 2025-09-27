import React from 'react';
import { Card } from '@radix-ui/themes';
import { useResponsive } from '../../utils/hooks/useResponsive';
import { getNumericalSizeFromBreakpoint } from '../../utils/breakpoints/breakpoints';
import styles from './styles.module.css';

interface BogCardProps extends React.ComponentProps<typeof Card> {
  children?: React.ReactNode;
  variant?: 'surface' | 'classic' | 'ghost';
  size?: '1' | '2' | '3';
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
  size,
  ...rest
}: BogCardProps) {
  const currentBreakpoint = useResponsive();
  const resolvedSize =
    size || getNumericalSizeFromBreakpoint(currentBreakpoint);
  const radiusBySize: Record<string, number> = { '1': 12, '2': 16, '3': 20 };
  const resolvedRadius = radiusBySize[resolvedSize] ?? 16;

  return (
    <Card
      {...rest}
      variant={variant}
      size={resolvedSize}
      className={`${styles.card}${className ? ` ${className}` : ''}`}
      style={{ borderRadius: resolvedRadius, ...style }}
    >
      {children}
    </Card>
  );
}
