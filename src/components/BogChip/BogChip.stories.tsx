import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Theme } from '@radix-ui/themes';
import BogChip from './BogChip';

const meta = {
  title: 'Chip',
  id: 'components-bogchip',
  component: BogChip,
  parameters: {
    layout: 'centered',
    docs: { story: { height: '160px' } },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Theme
        appearance="light"
        accentColor="indigo"
        grayColor="slate"
        radius="full"
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 0,
          }}
        >
          <Story />
        </div>
      </Theme>
    ),
  ],
  argTypes: {
    asChild: { control: 'boolean' },
    size: { control: 'radio', options: ['1', '2', '3', 'responsive'] },
    variant: {
      control: 'radio',
      options: ['solid', 'soft', 'surface', 'outline'],
    },
    color: {
      control: 'radio',
      options: ['green', 'crimson', 'orange', 'indigo'],
    },
    highContrast: { control: 'boolean' },
    radius: {
      control: 'radio',
      options: ['none', 'small', 'medium', 'large', 'full'],
    },
    state: {
      control: 'radio',
      options: ['none', 'complete', 'failure', 'inProgress', 'inReview'],
    },
    children: { control: 'text' },
  },
  args: {
    children: 'Complete',
    state: 'none',
    size: 'responsive',
    variant: 'soft',
    color: 'green',
    highContrast: false,
    radius: 'full',
  },
} satisfies Meta<typeof BogChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
