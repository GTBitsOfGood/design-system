import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import BogChip from './BogChip';

const meta = {
  title: 'Chip',
  component: BogChip,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      control: 'radio',
      options: [
        'gray',
        'gold',
        'bronze',
        'brown',
        'yellow',
        'amber',
        'orange',
        'tomato',
        'red',
        'ruby',
        'crimson',
        'pink',
        'plum',
        'purple',
        'violet',
        'iris',
        'indigo',
        'blue',
        'cyan',
        'teal',
        'jade',
        'green',
        'grass',
        'lime',
        'mint',
        'sky',
      ],
    },
    radius: {
      control: 'radio',
      options: ['none', 'small', 'medium', 'large', 'full'],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BogChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: 'Chip',
  },
};
