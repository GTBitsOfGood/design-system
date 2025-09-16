import React, { ReactElement } from 'react';
import { Toast } from 'radix-ui';
import { createPortal } from 'react-dom';
import styles from './styles.module.css';
import BogIcon from '../BogIcon/BogIcon';

interface BogToastProps extends React.ComponentProps<typeof Toast.Provider> {
  viewportProps?: React.ComponentPropsWithoutRef<typeof Toast.Viewport>;
  title?: string;
  description?: string;
  action?: ReactElement;
  status?:
    | 'success'
    | 'error'
    | 'message-primary'
    | 'message-secondary'
    | 'message-brand';
  variant?: 'filled' | 'outlined';
  button?: boolean;
  icon?: boolean;

  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  duration?: number;

  // Positioning
  centered?: boolean;

  className?: string;
  style?: React.CSSProperties;
}

// Default props for the component
const defaultProps: Partial<BogToastProps> = {
  duration: Infinity,
  open: false,
};

export default function BogToast({
  viewportProps,
  title,
  description,
  action,
  status,
  variant,
  button,
  icon,
  open = defaultProps.open,
  onOpenChange,
  duration = defaultProps.duration,
  centered,
  className,
  style,
  ...providerProps
}: BogToastProps) {
  const toastContent = (
    <Toast.Root
      className={`${styles.toast} ${status ? styles[status] : ''} ${variant === 'outlined' ? styles.outlined : ''} ${className}`}
      style={style}
      open={open ?? false}
      onOpenChange={(isOpen) => {
        if (!isOpen && onOpenChange) {
          setTimeout(() => {
            onOpenChange(false);
          }, 0);
        }
      }}
      duration={duration ?? Infinity} //set to infinity as placeholder for duration controls
    >
      <div className={styles['top-row']}>
        {icon && (
          <div
            className={`${styles.icon} ${status === 'success' ? styles.success : status === 'error' ? styles.error : status === 'message-primary' ? styles.info : status === 'message-secondary' ? styles.amber : status === 'message-brand' ? styles.brand : ''}`}
          >
            <BogIcon
              name={
                status === 'success'
                  ? 'check'
                  : status === 'error'
                    ? 'warning'
                    : 'info'
              }
              size={18}
              weight={
                status === 'success'
                  ? 'bold'
                  : status === 'error'
                    ? 'fill'
                    : 'fill'
              }
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
          {action || 'Button'}
        </Toast.Action>
      )}
      <Toast.Close className={styles.close}>
        <BogIcon name="x" size={16} />
      </Toast.Close>
    </Toast.Root>
  );

  return (
    <Toast.Provider duration={Infinity} {...providerProps}>
      {open && toastContent}
      {createPortal(
        <Toast.Viewport
          className={`${styles.viewport} ${centered ? styles.centered : ''}`}
          {...viewportProps}
          key={`toast-viewport-${centered ? 'centered' : 'normal'}`}
        />,
        document.body,
      )}
    </Toast.Provider>
  );
}
