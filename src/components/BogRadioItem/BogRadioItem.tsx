import { RadioGroup } from 'radix-ui';
import { useId } from 'react';
import styles from './styles.module.css';

interface BogRadioItemProps extends React.ComponentProps<typeof RadioGroup.Item> {
  label: string;
  value: string;
  disabled?: boolean;
}

export default function BogRadioItem({ label, value, disabled = false, className, style }: BogRadioItemProps) {
  const id = useId();
  return (
    <div style={style} className={`${styles.container} ${className}`} data-disabled={disabled}>
      <RadioGroup.Item className={styles.radio} value={value} disabled={disabled} id={id}>
        <RadioGroup.Indicator className={styles.indicator} />
      </RadioGroup.Item>
      <label className={styles.label} data-disabled={disabled}>
        {label}
      </label>
    </div>
  );
}
