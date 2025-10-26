import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import BogForm from '../components/BogForm/BogForm';
import BogCheckbox from '../components/BogCheckbox/BogCheckbox';
import BogRadioGroup from '../components/BogRadioGroup/BogRadioGroup';
import BogRadioItem from '../components/BogRadioItem/BogRadioItem';

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
  argTypes: {
    children: {
      control: false,
      description:
        'The content of the form. This will be a React node. ' +
        'This cannot be dynamically edited in this page, but the Form is simply a container for any of the Form input components we provide.',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof BogForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Form: Story = {
  args: {
    children: generateFormElements(),
    onSubmit: fn((e) => {
      e.preventDefault();
      alert(
        'Form submitted! with data: ' +
          JSON.stringify(Object.fromEntries(new FormData(e.target))),
      );
    }),
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
