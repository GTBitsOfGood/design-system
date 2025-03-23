import { Form } from 'radix-ui';
import styles from './styles.module.css';

export interface BogTextInputProps {
  multiline?: boolean;
  type?: 'text' | 'email' | 'password' | 'tel' | 'search';
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;

  style?: React.CSSProperties;
  className?: string;
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
      <Form.Control asChild>
        {multiline ? (
          <textarea
            name={name}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            rows={4}
            className={`${styles.input} text-paragraph-2 placeholder:text-paragraph-2 placeholder:text-grey-stroke-strong`}
          />
        ) : (
          <input
            name={name}
            type={type}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            className={`${styles.input} text-paragraph-2 placeholder:text-paragraph-2 placeholder:text-grey-stroke-strong`}
          />
        )}
      </Form.Control>
    </Form.Field>
  );
}
