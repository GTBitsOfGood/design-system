import * as React from 'react';
import clsx from 'clsx';
import '@radix-ui/themes/styles.css';
import { Badge, type BadgeProps } from '@radix-ui/themes';
import styles from './styles.module.css';
import { useResponsive } from '../../utils/hooks/useResponsive';
import BogIcon from '../BogIcon/BogIcon';

type RadixBadgeProps = React.ComponentProps<typeof Badge>;

export type BogChipState =
  | 'none'
  | 'complete'
  | 'failure'
  | 'inProgress'
  | 'inReview';

export interface BogChipProps extends Omit<RadixBadgeProps, 'size' | 'radius'> {
  size?: '1' | '2' | '3' | 'responsive';
  variant?: NonNullable<BadgeProps['variant']>;
  color?: BadgeProps['color'];
  highContrast?: boolean;
  asChild?: boolean;
  radius?: NonNullable<BadgeProps['radius']>;
  state?: BogChipState;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}

const sizeClassMap: Record<'1' | '2' | '3', string> = {
  '1': styles.size1,
  '2': styles.size2,
  '3': styles.size3,
};

const stateClassMap: Record<Exclude<BogChipState, 'none'>, string> = {
  complete: styles.stateComplete,
  failure: styles.stateFailure,
  inProgress: styles.stateInProgress,
  inReview: styles.stateInReview,
};

const iconByState: Record<
  Exclude<BogChipState, 'none'>,
  'check' | 'x' | 'warning' | 'info'
> = {
  complete: 'check',
  failure: 'x',
  inProgress: 'warning',
  inReview: 'info',
};

const iconPxBySize: Record<'1' | '2' | '3', number> = {
  '1': 14,
  '2': 16,
  '3': 18,
};

const stateInlinePalette: Record<
  Exclude<BogChipState, 'none'>,
  { color: string; backgroundColor: string; ring: string }
> = {
  complete: {
    color: '#0A7B40',
    backgroundColor: 'rgba(10,123,64,0.05)',
    ring: '#0A7B40',
  },
  failure: {
    color: '#C73A3A',
    backgroundColor: 'rgba(199,58,58,0.05)',
    ring: '#C73A3A',
  },
  inProgress: {
    color: '#8F6C1A',
    backgroundColor: 'rgba(143,108,26,0.05)',
    ring: '#8F6C1A',
  },
  inReview: {
    color: '#325CE8',
    backgroundColor: 'rgba(50,92,232,0.05)',
    ring: '#325CE8',
  },
};

export default function BogChip({
  asChild,
  children,
  size = 'responsive',
  variant = 'soft',
  color,
  highContrast = false,
  radius = 'full',
  state = 'none',
  className,
  style,
  ...rest
}: BogChipProps) {
  const bp = useResponsive?.() ?? 'large';
  const resolvedSize: '1' | '2' | '3' =
    size === 'responsive' ? (bp === 'small' ? '1' : '2') : (size ?? '2');

  const hasState = state !== 'none';
  const iconName = hasState
    ? iconByState[state as Exclude<BogChipState, 'none'>]
    : undefined;

  const rootClass = clsx(
    styles.chip,
    sizeClassMap[resolvedSize],
    hasState
      ? stateClassMap[state as Exclude<BogChipState, 'none'>]
      : undefined,
    className,
  );

  const palette = hasState
    ? stateInlinePalette[state as Exclude<BogChipState, 'none'>]
    : null;

  const mergedStyle: React.CSSProperties = {
    ...(hasState
      ? variant === 'outline'
        ? {
            color: palette!.color,
            backgroundColor: 'transparent',
            boxShadow: `inset 0 0 0 1px ${palette!.ring}`,
          }
        : {
            color: palette!.color,
            backgroundColor: palette!.backgroundColor,
          }
      : null),
    ...style,
  };

  return (
    <Badge
      {...(rest as Omit<RadixBadgeProps, 'radius' | 'size'>)}
      asChild={asChild}
      size={resolvedSize}
      variant={variant}
      color={hasState ? undefined : color}
      highContrast={highContrast}
      radius={radius}
      className={rootClass}
      style={mergedStyle}
    >
      <span className={styles.content}>
        {iconName && (
          <BogIcon name={iconName} size={iconPxBySize[resolvedSize]} />
        )}
        <span>{children}</span>
      </span>
    </Badge>
  );
}
