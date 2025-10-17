import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import BogTooltip from './BogTooltip';
import BogIcon from '../BogIcon/BogIcon';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Tooltip',
  component: BogTooltip,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  argTypes: {
    children: { table: { disable: true }, control: false },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof BogTooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Tooltip: Story = {
  args: {
    trigger: (
      <button>
        <BogIcon name="info" size="16" />
      </button>
    ),
    contentProps: { children: 'Hello I am a tooltip!', side: 'top' },
    children: null,
  },
  render: (args) => {
    return (
      <div>
        <BogTooltip {...args} />
      </div>
    );
  },
};
