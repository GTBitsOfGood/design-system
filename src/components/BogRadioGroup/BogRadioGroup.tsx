import { ComponentProps } from 'react';
import { RadioGroup } from 'radix-ui';
import styles from './styles.module.css';

interface BogRadioGroupProps extends ComponentProps<typeof RadioGroup.Root> {}

export default function BogRadioGroup({ children, ...props }: BogRadioGroupProps) {
  return (
    <RadioGroup.Root {...props} className={`${styles.root} ${props.className || ''}`}>
      {children}
    </RadioGroup.Root>
  );
}
