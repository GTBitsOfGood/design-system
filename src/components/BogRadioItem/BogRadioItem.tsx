import { RadioGroup } from 'radix-ui';
import { useId } from 'react';
import styles from './styles.module.css';

export interface BogRadioItemProps {
  label: string;
  value: string;
  disabled?: boolean;
}

export function BogRadioItem({ label, value, disabled = false }: BogRadioItemProps) {
  const id = useId();
  return (
    <div className={styles.container} data-disabled={disabled}>
      <RadioGroup.Item className={styles.radio} value={value} disabled={disabled} id={id}>
        <RadioGroup.Indicator className={styles.indicator} />
      </RadioGroup.Item>
      <label className={styles.label} data-disabled={disabled}>
        {label}
      </label>
    </div>
  );
}
