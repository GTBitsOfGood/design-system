import { ComponentProps } from 'react';
import { RadioGroup } from 'radix-ui';

export interface BogRadioGroupProps extends ComponentProps<typeof RadioGroup.Root> {}

export function BogradioGroup({ children, ...props }: BogRadioGroupProps) {
  return (
    <RadioGroup.Root {...props} className={`flex flex-col gap-y-1 ${props.className}`}>
      {children}
    </RadioGroup.Root>
  );
}
