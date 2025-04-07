import { TextField, TextArea } from 'radix-ui';
import styles from './styles.module.css';
import { useState } from 'react';

interface BogTextInputProps {
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
    <div className={className} style={style}>
      {label && (
        <div className="flex flex-row gap-x-2 text-paragraph-2 py-1">
          <label htmlFor={name}>{label}</label>
          {/* Error messages can be handled via custom logic or via the Form wrapper in BogForm */}
        </div>
      )}
      <div className="relative">
        {placeholder !== undefined && <CustomPlaceholder placeholder={placeholder} value={value} />}
        {multiline ? (
          <TextArea
            id={name}
            name={name}
            required={required}
            disabled={disabled}
            rows={4}
            className={`${styles.input} text-paragraph-2 placeholder:text-paragraph-2`}
            onChange={(e) => setValue(e.target.value)}
          />
        ) : (
          <TextField
            id={name}
            name={name}
            type={type}
            required={required}
            disabled={disabled}
            className={`${styles.input} text-paragraph-2 placeholder:text-paragraph-2`}
            onChange={(e) => setValue(e.target.value)}
          />
        )}
      </div>
    </div>
  );
}
