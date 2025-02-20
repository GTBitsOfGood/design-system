import React from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { MinusIcon, CheckIcon } from '@radix-ui/react-icons';
import styles from './checkbox.module.css';

interface BogCheckboxProps extends React.ComponentProps<typeof Checkbox.Root> {
  label?: string;
  disabled?: boolean;
  checked?: boolean | 'indeterminate';
  required?: boolean;
  name: string;
}

const BogCheckbox = ({ label = '', disabled = false, checked, required = false, name }: BogCheckboxProps) => {
  return (
    <div
      className={`${styles.checkboxContainer} ${disabled ? styles.disabled : ''} ${checked === 'indeterminate' ? styles.indeterminate : ''}`}
    >
      <Checkbox.Root
        className={`${styles.checkbox} ${disabled ? styles.disabled : ''}`}
        disabled={disabled}
        checked={checked}
        required={required}
        name={name}
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
        <label
          className={`${styles.checkboxLabel} ${disabled ? styles.disabled : ''} ${checked === 'indeterminate' ? styles.indeterminate : ''}`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default BogCheckbox;
