import React from 'react';
import styles from './styles.module.css';

interface BogButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The type of button. Values are "primary", "secondary", or "tertiary" */
  variant?: 'primary' | 'secondary' | 'tertiary';
  /** The size of button. Values are "small", "medium", or "large" */
  size?: 'small' | 'medium' | 'large';
  /**
   * The icon to display in the button.
   * This is an object containing the React node of the icon
   * to display and whether to place it on the left or right side
   * of the button.
   * */
  icon?: {
    icon: React.ReactNode;
    position: 'left' | 'right';
  };
  /** The name of the data this button represents for forms. */
  name?: string;
  /** The value of the data this button represents for forms. */
  value?: string;
  /** The content that appears inside the button. */
  children: React.ReactNode;
}

export default function BogButton({
  variant = 'primary',
  size = 'medium',
  icon,
  name,
  value,
  children,
  className,
  ...props
}: BogButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
      name={name}
      value={value}
      {...props}
    >
      <div className={`${styles.contentContainer}`}>
        {icon && icon.position === 'left' && icon.icon}
        {children}
        {icon && icon.position === 'right' && icon.icon}
      </div>
    </button>
  );
}
