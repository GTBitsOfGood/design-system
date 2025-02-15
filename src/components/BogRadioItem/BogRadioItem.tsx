import { RadioGroup } from 'radix-ui';
import { useId } from 'react';

export interface BogRadioItemProps {
  label: string;
  value: string;
  disabled?: boolean;
}

export function BogRadioItem({ label, value, disabled = false }: BogRadioItemProps) {
  const id = useId();
  return (
    <div className="flex flex-row gap-2 items-center">
      <RadioGroup.Item
        className="relative h-5 w-5 rounded-full border bg-white data-[disabled=false]:border-gray-300 data-[disabled=false]:hover:border-brand-text data-[disabled=false]:data-[state=checked]:border-brand-text data-[disabled=true]:border-gray-200 data-[disabled=true]:bg-gray-50 outline-none"
        value={value}
        disabled={disabled}
        id={id}
        data-disabled={disabled}
      >
        <RadioGroup.Indicator
          className="flex absolute inset-0 justify-center items-center after:h-2.5 after:w-2.5 after:rounded-full data-[disabled=false]:after:bg-brand-text data-[disabled=true]:after:bg-gray-200"
          data-disabled={disabled}
        />
      </RadioGroup.Item>
      <label
        className="text-paragraph-2 data-[disabled=false]:text-gray-700 data-[disabled=true]:text-gray-400"
        htmlFor={id}
        data-disabled={disabled}
      >
        {label}
      </label>
    </div>
  );
}
