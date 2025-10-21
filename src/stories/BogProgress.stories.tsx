import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import BogProgress from '../components/BogProgress/BogProgress';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Progress',
  component: BogProgress,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof BogProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Progress: Story = {
  args: {
    value: 30,
    color: 'brand',
    showPercentage: true,
  },
};
