import React from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { MinusIcon, CheckIcon } from '@radix-ui/react-icons';
import styles from './checkbox.module.css';

interface BogCheckboxProps extends React.ComponentPropsWithoutRef<typeof Checkbox.Root> {
  label: string;
}

const BogCheckBox: React.FC<BogCheckboxProps> = ({ label, className = '', disabled = false, checked, ...props }) => {
  return (
    <div className={styles.checkboxContainer}>
      <Checkbox.Root
        className={`${styles.checkbox} ${className} ${disabled ? styles.disabled : ''}`}
        disabled={disabled}
        checked={checked}
        {...props}
      >
        <Checkbox.Indicator className={styles.checkboxIndicator}>
          {checked === 'indeterminate' ? (
            <MinusIcon className={styles.checkboxIcon} />
          ) : (
            <CheckIcon className={styles.checkboxIcon} />
          )}
        </Checkbox.Indicator>
      </Checkbox.Root>
      {label && (
        <label className={`${styles.checkboxLabel} ${disabled ? styles.disabled : ''}`} htmlFor={props.id}>
          {label}
        </label>
      )}
    </div>
  );
};

export default BogCheckBox;
