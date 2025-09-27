import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import BogCard from './BogCard';
import { Text, Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

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
      options: ['1', '2', '3'],
      description: 'The size of the card (affects border radius)',
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
  args: {
    variant: 'surface',
    size: '2',
  },
  render: (args) => (
    <Theme appearance="light">
      <div style={{ width: 622 }}>
        <BogCard {...args}>
          <div
            style={{
              height: 170,
            }}
          ></div>
        </BogCard>
      </div>
    </Theme>
  ),
};
