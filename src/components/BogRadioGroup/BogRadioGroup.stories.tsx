import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import BogRadioGroup from './BogRadioGroup';
import BogRadioItem from '../BogRadioItem/BogRadioItem';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Radio Group',
  component: BogRadioGroup,
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
        'The content that appears inside the radio group. This cannot be dynamically edited in this page, but you can place whatever React components ' +
        "you'd like inside the Radio Group (Radio item components are intended).",
    },
  },
} satisfies Meta<typeof BogRadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const RadioGroup: Story = {
  args: {
    children: (
      <>
        <BogRadioItem label="Option 1" value="option1" />
        <BogRadioItem label="Option 2" value="option2" />
        <BogRadioItem label="Option 3" value="option3" />
      </>
    ),
  },
};
