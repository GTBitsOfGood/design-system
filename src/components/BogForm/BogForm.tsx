import { Form } from 'radix-ui';
import styles from './styles.module.css';
import BogButton from '../BogButton/BogButton';
import React, { Children, isValidElement } from 'react';
import type { FormEventHandler } from 'react';

interface BogFormProps {
  onSubmit: FormEventHandler<HTMLFormElement>;
  submitLabel?: string;
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
}

export default function BogForm({ onSubmit, submitLabel, style, className, children }: BogFormProps) {
  // Wrap each child in a Form.Field so that their data is captured.
  const wrappedChildren = Children.map(children, (child) =>
    isValidElement(child) ? <Form.Field>{child}</Form.Field> : child
  );

  return (
    <Form.Root onSubmit={onSubmit} className={`${className} ${styles.root}`} style={style}>
      {wrappedChildren}
      <Form.Submit asChild>
        <BogButton type="submit">{submitLabel || 'Submit'}</BogButton>
      </Form.Submit>
    </Form.Root>
  );
}
