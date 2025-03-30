import { Form } from 'radix-ui';
import styles from './styles.module.css';
import { useState } from 'react';

export interface BogTextInputProps {
  multiline?: boolean;
  type?: 'text' | 'email' | 'password' | 'tel' | 'search';
  name: string;
  label?: string;
  placeholder?: React.ReactElement | string;
  required?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

interface CustomPlaceholderProps {
  placeholder: React.ReactElement | string;
  value: string;
}

function CustomPlaceholder({ placeholder, value }: CustomPlaceholderProps) {
  return (
    <>
      {!value && (
        <div className="absolute left-2 top-2 text-gray-500 flex items-center pointer-events-none">{placeholder}</div>
      )}
    </>
  );
}

export function BogTextInput({
  type = 'text',
  name,
  label,
  multiline = false,
  placeholder,
  required = false,
  disabled = false,
  style,
  className,
}: BogTextInputProps) {
  const [value, setValue] = useState<string>('');

  return (
    <Form.Field name={name} className={className} style={style}>
      <div className="flex flex-row gap-x-2 text-paragraph-2 py-1">
        <Form.Label>{label}</Form.Label>
        <Form.Message match="valueMissing" className="text-status-red-text">
          Please enter a value for {label}
        </Form.Message>
        <Form.Message match="typeMismatch" className="text-status-red-text">
          Please provide a valid {label}
        </Form.Message>
      </div>
      <div className="relative">
        {placeholder !== undefined && <CustomPlaceholder placeholder={placeholder} value={value} />}
        <Form.Control asChild>
          {multiline ? (
            <textarea
              name={name}
              required={required}
              disabled={disabled}
              rows={4}
              className={`${styles.input} text-paragraph-2 placeholder:text-paragraph-2`}
              onChange={(e) => setValue(e.target.value)}
            />
          ) : (
            <input
              name={name}
              type={type}
              required={required}
              disabled={disabled}
              className={`${styles.input} text-paragraph-2 placeholder:text-paragraph-2`}
              onChange={(e) => setValue(e.target.value)}
            />
          )}
        </Form.Control>
      </div>
    </Form.Field>
  );
}
