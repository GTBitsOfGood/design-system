import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import BogCard from './BogCard';
import { Theme } from '@radix-ui/themes';

const meta = {
  title: 'Card',
  component: BogCard,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['surface', 'classic', 'ghost'],
      description: 'The visual style variant of the card',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'responsive'],
      description: 'The size of the card',
    },
    children: {
      control: false,
      description:
        'The content inside the card. This cannot be dynamically edited in this page.',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names to apply to the card',
    },
    asChild: {
      control: 'boolean',
      description: 'Whether to render as a child component',
    },
  },
} satisfies Meta<typeof BogCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Card: Story = {
  args: {},
};
