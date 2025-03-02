import React from 'react';
import styles from './styles.module.css';

interface BogButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  icon?: {
    icon: React.ReactNode;
    position: 'left' | 'right';
  };
  name?: string;
  value?: string;
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
