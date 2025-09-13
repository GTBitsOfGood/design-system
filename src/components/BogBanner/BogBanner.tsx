import React from 'react';
import { Callout } from '@radix-ui/themes';
import clsx from 'clsx';
import styles from './styles.module.css';
import BogIcon from '../BogIcon/BogIcon';
export type BannerKind =
  | 'success'
  | 'error'
  | 'warning'
  | 'message'
  | 'brand-message';
export type BannerTone = 'filled' | 'outlined';
export type BogBannerKind = BannerKind;
export type BogBannerTone = BannerTone;
type IconName = 'info' | 'success' | 'warning' | 'error';
export interface BannerProps
  extends Omit<
    React.ComponentProps<typeof Callout.Root>,
    'size' | 'variant' | 'color' | 'content'
  > {
  type: BannerKind;
  tone?: BannerTone;
  icon?: React.ReactElement;
  iconName?: IconName;
  content: React.ReactElement;
  fontSize?: number | string;
  lineHeight?: number | string;
  className?: string;
  style?: React.CSSProperties;
  role?: React.AriaRole;
  highContrast?: boolean;
}

const TYPE_CLASS: Record<BannerKind, string> = {
  success: styles.success,
  error: styles.error,
  warning: styles.warning,
  message: styles.message,
  'brand-message': styles.brandMessage,
};

function resolveSize(val: number | string | undefined, fallback = '16px') {
  if (val == null) return fallback;
  return typeof val === 'number' ? `${val}px` : val;
}

function defaultIconFor(type: BannerKind): IconName {
  switch (type) {
    case 'success':
      return 'success';
    case 'error':
      return 'error';
    case 'warning':
      return 'warning';
    case 'message':
    case 'brand-message':
    default:
      return 'info';
  }
}

export default function Banner({
  type,
  tone = 'filled',
  icon,
  iconName,
  content,
  fontSize = 16,
  lineHeight,
  className,
  style,
  role,
  highContrast,
  ...rest
}: BannerProps) {
  const rootClass = clsx(
    styles.root,
    TYPE_CLASS[type],
    styles[tone],
    className,
  );

  const computedRole: React.AriaRole | undefined =
    role ?? (type === 'error' || type === 'warning' ? 'alert' : undefined);

  const mergedStyle: React.CSSProperties & Record<string, any> = {
    ...style,
    ['--bb-font-size']: resolveSize(fontSize, '16px'),
    ...(lineHeight != null && {
      ['--bb-line-height']:
        typeof lineHeight === 'number' ? String(lineHeight) : lineHeight,
    }),
  };

  const iconNode = icon ?? (
    <BogIcon
      name={iconName ?? defaultIconFor(type)}
      size="1em"
      weight="fill"
      color="currentColor"
    />
  );

  return (
    <Callout.Root
      variant="surface"
      highContrast={highContrast}
      role={computedRole}
      className={rootClass}
      style={mergedStyle}
      {...rest}
    >
      <div className={styles.inner}>
        <Callout.Icon className={styles.icon}>{iconNode}</Callout.Icon>
        <Callout.Text
          className={styles.text}
          style={{
            fontFamily:
              "Open Sans, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif",
            fontWeight: 400,
          }}
        >
          {content}
        </Callout.Text>
      </div>
    </Callout.Root>
  );
}

(Banner as any).displayName = 'Banner';
