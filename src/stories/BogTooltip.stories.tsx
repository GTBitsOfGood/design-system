import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import BogTooltip from '../components/BogTooltip/BogTooltip';
import BogIcon from '../components/BogIcon/BogIcon';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Tooltip',
  component: BogTooltip,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    className: { table: { disable: true }, control: false },
  },
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
