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

export interface BogChipProps
  extends Omit<RadixBadgeProps, 'size' | 'radius' | 'variant'> {
  size?: '1' | '2' | '3' | '4' | 'responsive';
  color?: BadgeProps['color'];
  highContrast?: boolean;
  asChild?: boolean;
  radius?: NonNullable<BadgeProps['radius']>;
  state?: BogChipState;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}

const sizeClassMap: Record<'1' | '2' | '3' | '4', string> = {
  '1': styles.size1,
  '2': styles.size2,
  '3': styles.size3,
  '4': styles.size4,
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

const iconPxBySize: Record<'1' | '2' | '3' | '4', number> = {
  '1': 14,
  '2': 16,
  '3': 18,
  '4': 20,
};

const stateInlinePalette: Record<
  Exclude<BogChipState, 'none'>,
  { color: string; backgroundColor: string; ring: string }
> = {
  complete: {
    color: 'var(--color-status-green-text)',
    backgroundColor: 'var(--color-status-green-fill)',
    ring: 'var(--color-status-green-text)',
  },
  failure: {
    color: 'var(--color-status-red-text)',
    backgroundColor: 'var(--color-status-red-fill)',
    ring: 'var(--color-status-red-text)',
  },
  inProgress: {
    color: 'var(--color-status-amber-text)',
    backgroundColor: 'var(--color-status-amber-fill)',
    ring: 'var(--color-status-amber-text)',
  },
  inReview: {
    color: 'var(--color-status-blue-text)',
    backgroundColor: 'var(--color-status-blue-fill)',
    ring: 'var(--color-status-blue-text)',
  },
};

export default function BogChip({
  asChild,
  children,
  size = 'responsive',
  color,
  highContrast = false,
  radius = 'full',
  state = 'none',
  className,
  style,
  ...rest
}: BogChipProps) {
  const bp = useResponsive?.() ?? 'large';
  const resolvedSize: '1' | '2' | '3' | '4' =
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
  const isOutline = (rest as RadixBadgeProps).variant === 'outline';

  const mergedStyle: React.CSSProperties = {
    ...(hasState
      ? {
          color: palette!.color,
          backgroundColor: isOutline ? 'transparent' : palette!.backgroundColor,
          ...(isOutline && { boxShadow: `inset 0 0 0 1px ${palette!.ring}` }),
        }
      : null),
    ...style,
  };

  return (
    <Badge
      {...(rest as Omit<RadixBadgeProps, 'radius' | 'size'>)}
      asChild={asChild}
      size={resolvedSize as RadixBadgeProps['size']}
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
