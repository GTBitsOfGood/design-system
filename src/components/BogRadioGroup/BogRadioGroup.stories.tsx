import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import BogRadioGroup from './BogRadioGroup';
import BogRadioItem from '../BogRadioItem/BogRadioItem';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Radio Group and Radio Item',
  component: BogRadioGroup,
  subcomponents: { BogRadioItem },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
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
