import { Form } from 'radix-ui';
import styles from './styles.module.css';
import BogButton from '../BogButton/BogButton';
import type { FormEventHandler } from 'react';
import React from 'react';

interface BogFormProps extends React.ComponentProps<typeof Form.Root> {
  /** Function that gets called when the submit button is clicked. */
  onSubmit: FormEventHandler<HTMLFormElement>;
  /** Text within the submit button. */
  submitLabel?: string;
  /** The content within the form. Place your form inputs in here. */
  children: React.ReactNode;
  /** Additional class names to apply styles to the form. These can be tailwind classes or custom CSS classes. */
  className?: string;
  /** Additional CSS styles to apply to the form. */
  style?: React.CSSProperties;
}

export default function BogForm({ onSubmit, submitLabel, style, className, children }: BogFormProps) {
  return (
    <Form.Root onSubmit={onSubmit} className={`${className} ${styles.root}`} style={style}>
      {children}
      <Form.Submit asChild>
        <BogButton type="submit">{submitLabel || 'Submit'}</BogButton>
      </Form.Submit>
    </Form.Root>
  );
}
