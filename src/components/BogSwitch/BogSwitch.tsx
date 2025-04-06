import * as React from 'react';
import * as RadixSwitch from '@radix-ui/react-switch';
import styles from './styles.module.css';

interface BogSwitchProps extends React.ComponentPropsWithoutRef<typeof RadixSwitch.Root> {
  label?: string;
  size?: 'small' | 'medium' | 'large';
}

const BogSwitch: React.FC<BogSwitchProps> = ({ label, size = 'medium', className, style, ...props }) => {
  const containerClass = `${styles['bog-switch-container']} ${className || ''}`.trim();
  const rootClass = `${styles['bog-switch']} ${
    size === 'small'
      ? styles['bog-switch-small']
      : size === 'medium'
        ? styles['bog-switch-medium']
        : styles['bog-switch-large']
  }`.trim();
  const thumbClass = `${styles['bog-switch-thumb']} ${
    size === 'small'
      ? styles['bog-switch-thumb-small']
      : size === 'medium'
        ? styles['bog-switch-thumb-medium']
        : styles['bog-switch-thumb-large']
  }`.trim();
  return (
    <div className={containerClass} style={style}>
      <RadixSwitch.Root className={rootClass} {...props}>
        <RadixSwitch.Thumb className={thumbClass} />
      </RadixSwitch.Root>
      {label && <span className={styles['bog-switch-label']}>{label}</span>}
    </div>
  );
};

export default BogSwitch;
