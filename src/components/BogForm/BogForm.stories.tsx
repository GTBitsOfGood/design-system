import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';

import BogForm from './BogForm';
import React from 'react';
import BogCheckbox from '../BogCheckbox/BogCheckbox';
import BogRadioGroup from '../BogRadioGroup/BogRadioGroup';
import BogRadioItem from '../BogRadioItem/BogRadioItem';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Form',
  component: BogForm,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof BogForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Form: Story = {
  args: {
    children: generateFormElements(),
    onSubmit: fn(),
  },
};

function generateFormElements(): React.ReactNode {
  return (
    <>
      <BogRadioGroup name="options">
        <BogRadioItem label="Option 1" value="option1" />
        <BogRadioItem label="Option 2" value="option2" />
        <BogRadioItem label="Option 3" value="option3" />
      </BogRadioGroup>
      <BogCheckbox label="Checkbox:" name="checkbox" />
    </>
  );
}
