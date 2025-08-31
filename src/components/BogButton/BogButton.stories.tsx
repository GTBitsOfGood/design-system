import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import BogButton from './BogButton';
import BogIcon from '../BogIcon/BogIcon';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Button',
  component: BogButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
  argTypes: {
    onClick: {
      description: 'The function that gets executed when clicking the button.',
    },
    icon: {
      control: false,
      description:
        'The icon to display in the button. This is an object containing the React node of the icon to display ' +
        'and the position of the icon (left or right). ' +
        'This cannot be dynamically edited in this page, but use the Icon story to see how the icon component works, ' +
        'and then pass the icon component as a prop to this button.',
    },
    children: {
      control: false,
      description:
        'The content that appears inside the button. This cannot be dynamically edited in this page, but you can place whatever React components ' +
        'or text you want inside the button.',
    },
  },
} satisfies Meta<typeof BogButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const NoIconButton: Story = {
  args: {
    children: 'Button',

    onClick: fn((e) => {
      console.log('Button clicked!', e);
    }),

    size: 'responsive',
    variant: 'primary',
  },
};

export const IconButton: Story = {
  args: {
    icon: {
      icon: <BogIcon name="plus" size={16} />,
      position: 'left',
    },
    children: 'Icon Button',
    onClick: fn((e) => {
      console.log('Button clicked!', e);
    }),
  },
};
