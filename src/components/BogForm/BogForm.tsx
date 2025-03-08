import { Form } from 'radix-ui';
import styles from './styles.module.css';
import BogButton from '../BogButton/BogButton';
import type { FormEventHandler } from 'react';

export interface BogFormProps {
  onSubmit?: FormEventHandler<HTMLFormElement>;
  submitLabel?: string;
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
}

export function BogForm({ onSubmit, submitLabel, style, className, children }: BogFormProps) {
  return (
    <Form.Root onSubmit={onSubmit} className={`${className} ${styles.root}`} style={style}>
      {children}
      <Form.Submit asChild>
        <BogButton type="submit">{submitLabel || 'Submit'}</BogButton>
      </Form.Submit>
    </Form.Root>
  );
}
