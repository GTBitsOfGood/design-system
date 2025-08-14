import { Form } from 'radix-ui';
import styles from './styles.module.css';
import { useState } from 'react';

interface BogTextInputProps extends React.ComponentProps<typeof Form.Field> {
  /** Whether or not the text input has multiple lines. */
  multiline?: boolean;
  /** The type of text the input stores. */
  type?: 'text' | 'email' | 'password' | 'tel' | 'search';
  /** The name of the data this text input represents for forms. */
  name: string;
  /** The label text next to the input. */
  label?: string;
  /** The placeholder text in the text input when it is empty. */
  placeholder?: React.ReactElement | string;
  /** Whether or not the text input is required for form submission. */
  required?: boolean;
  /** Whether or not the text input is disabled. */
  disabled?: boolean;
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

export default function BogTextInput({
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
              className={`${styles.input} text-paragraph-2 placeholder:text-paragraph-2 `}
              onChange={(e) => setValue(e.target.value)}
            />
          )}
        </Form.Control>
      </div>
    </Form.Field>
  );
}
