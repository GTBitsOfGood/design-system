import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import BogRadioItem from '../components/BogRadioItem/BogRadioItem';
import BogRadioGroup from '../components/BogRadioGroup/BogRadioGroup';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Radio Item',
  component: BogRadioItem,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  argTypes: {
    className: { table: { disable: true }, control: false },
  },
} satisfies Meta<typeof BogRadioItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const RadioItem: Story = {
  args: {
    label: 'Option 1',
    value: 'option1',
  },
  render: (args) => (
    <BogRadioGroup>
      <BogRadioItem {...args} />
    </BogRadioGroup>
  ),
};
