import React, { ReactElement, useEffect, useState } from 'react';
import { Toast } from 'radix-ui';
import { createPortal } from 'react-dom';
import styles from './styles.module.css';
import BogIcon from '../BogIcon/BogIcon';

interface BogToastProps extends React.ComponentProps<typeof Toast.Root> {
  /** Additional props to pass to the toast viewport container. */
  viewportProps?: React.ComponentPropsWithoutRef<typeof Toast.Viewport>;
  /** The main title text displayed in the toast. */
  title?: string;
  /** The description text displayed below the title in the toast. */
  description?: string;
  /** Custom action element to display in the toast (e.g., a button). */
  action?: ReactElement;
  /** The visual status/type of the toast that determines its styling and icon. */
  status?: 'success' | 'error' | 'info' | 'warning' | 'brand';
  /** The visual style variant of the toast. */
  variant?: 'filled' | 'outlined';
  /** Whether to show a button in the toast. */
  button?: boolean;
  /** Whether to show an icon in the toast based on the status. */
  icon?: boolean;

  /** How long the toast should be visible in seconds. Use 0 toast to remain visible until closed. */
  duration?: number;

  /** Additional class names to apply styles to the toast. These can be tailwind classes or custom CSS classes. */
  className?: string;
  /** Additional CSS styles to apply to the toast. */
  style?: React.CSSProperties;
}

export default function BogToast({
  viewportProps,
  title,
  description,
  action,
  status,
  variant,
  button,
  icon,
  duration = 0,
  className,
  style,
  ...props
}: BogToastProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const statusStyles = {
    success: styles.success,
    error: styles.error,
    info: styles.info,
    warning: styles.warning,
    brand: styles.brand,
  };

  const variantStyles = {
    filled: styles.filled,
    outlined: styles.outlined,
  };

  // Icon names per the BogIcon component options
  const iconNames = {
    success: 'check',
    error: 'warning',
    info: 'info',
    warning: 'info',
    brand: 'info',
  };

  // Builds the toast className by
  // combining base styles with variant style and additional className
  const toastClass = `${styles.toast} ${status ? statusStyles[status] : ''} ${
    variant ? variantStyles[variant] : ''
  } ${className || ''}`.trim();

  const toastDuration = duration === 0 ? Infinity : duration * 1000;

  const toastContent = (
    <Toast.Root
      key={`toast-root-${duration}-${toastDuration}`}
      className={toastClass}
      style={style}
      {...props}
      duration={toastDuration}
    >
      <div className={styles['top-row']}>
        {icon && (
          <div
            className={`${styles.icon} ${status ? statusStyles[status] : ''}`}
          >
            <BogIcon
              name={(status ? iconNames[status] || 'info' : 'info') as any}
              size={16}
              weight={status === 'success' ? 'bold' : 'fill'}
            />
          </div>
        )}
        <div className={styles.content}>
          {title && <Toast.Title className={styles.title}>{title}</Toast.Title>}
          {description && (
            <Toast.Description className={styles.description}>
              {description}
            </Toast.Description>
          )}
        </div>
      </div>
      {button && (
        <Toast.Action className={styles.action} altText={'Button'}>
          {action}
        </Toast.Action>
      )}
      <Toast.Close className={styles.close}>
        <BogIcon name="x" size={16} />
      </Toast.Close>
    </Toast.Root>
  );

  return (
    <Toast.Provider key={`toast-provider-${duration}`}>
      {toastContent}
      {/* Portal logic necessary to render toast outside of parent component in docs */}
      {mounted &&
        typeof window !== 'undefined' &&
        createPortal(
          <Toast.Viewport
            className={`${styles.viewport}`}
            {...viewportProps}
            key={`toast-viewport`}
          />,
          document.body,
        )}
    </Toast.Provider>
  );
}
