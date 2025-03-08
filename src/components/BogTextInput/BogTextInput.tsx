import { Form } from 'radix-ui';
import styles from './styles.module.css';

export interface BogTextInputProps {
  multiline?: boolean;
  type?: 'text' | 'email' | 'password' | 'tel';
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
  required = true,
  disabled = false,
  style,
  className,
}: BogTextInputProps) {
  return (
    <Form.Field name={name}>
      <div className="flex flex-row gap-x-2 text-paragraph-2">
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
            className={`${styles.input} text-paragraph-2`}
          />
        ) : (
          <input
            name={name}
            type={type}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            className={`${styles.input} text-paragraph-2`}
          />
        )}
      </Form.Control>
    </Form.Field>
  );
}
