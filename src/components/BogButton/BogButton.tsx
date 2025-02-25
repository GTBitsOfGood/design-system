import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import './styles.module.css';

interface BogButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const BogButton = forwardRef<HTMLButtonElement, BogButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'medium',
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled = false,
      className = '',
      ...props
    },
    ref
  ) => {
    const buttonClasses = [
      'bog-button',
      `bog-button--${variant}`,
      `bog-button--${size}`,
      fullWidth ? 'bog-button--full-width' : '',
      disabled ? 'bog-button--disabled' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button ref={ref} className={buttonClasses} disabled={disabled} {...props}>
        {leftIcon && <span className="bog-button__icon bog-button__icon--left">{leftIcon}</span>}
        <span className="bog-button__text">{children}</span>
        {rightIcon && <span className="bog-button__icon bog-button__icon--right">{rightIcon}</span>}
      </button>
    );
  }
);

BogButton.displayName = 'BogButton';

export default BogButton;
