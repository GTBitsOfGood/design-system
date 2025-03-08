import * as React from 'react';
import * as RadixSwitch from '@radix-ui/react-switch';
import styles from './styles.module.css';
import clsx from 'clsx';

export interface BogSwitchProps extends React.ComponentPropsWithoutRef<typeof RadixSwitch.Root> {
  label?: string;
  size?: 'small' | 'medium' | 'large';
}

export const BogSwitch: React.FC<BogSwitchProps> = ({ label, size = 'medium', className, style, ...props }) => {
  return (
    <div className={clsx(styles['bog-switch-container'], className)} style={style}>
      <RadixSwitch.Root
        className={clsx(
          styles['bog-switch'],

          size === 'small' && styles['bog-switch-small'],
          size === 'medium' && styles['bog-switch-medium'],
          size === 'large' && styles['bog-switch-large']
        )}
        {...props}
      >
        <RadixSwitch.Thumb
          className={clsx(
            styles['bog-switch-thumb'],
            size === 'small' && styles['bog-switch-thumb-small'],
            size === 'medium' && styles['bog-switch-thumb-medium'],
            size === 'large' && styles['bog-switch-thumb-large']
          )}
        />
      </RadixSwitch.Root>
      {label && <span className={styles['bog-switch-label']}>{label}</span>}
    </div>
  );
};
