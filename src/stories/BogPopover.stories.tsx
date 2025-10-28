import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import BogChip from '../components/BogChip/BogChip';
import BogPopover from '../components/BogPopover/BogPopover';
import BogIcon from '../components/BogIcon/BogIcon';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Popover',
  component: BogPopover,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  argTypes: {
    trigger: {
      control: false,
    },
    content: {
      control: false,
    },
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof BogPopover>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Popover: Story = {
  args: {
    trigger: <BogChip color="cyan">Click me</BogChip>,
    content: (
      <div>
        <p>Hello, I am a popover!</p>
        <span>Additional content...</span>
      </div>
    ),
  },
};
