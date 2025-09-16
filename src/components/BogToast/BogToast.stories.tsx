import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import BogToast from './BogToast';
import BogButton from '../BogButton/BogButton';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Toast',
  component: BogToast,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    status: {
      control: 'select',
      options: [
        'success',
        'error',
        'message-primary',
        'message-secondary',
        'message-brand',
      ],
    },
    variant: {
      control: 'select',
      options: ['filled', 'outlined'],
    },
    icon: { control: 'boolean' },
    button: { control: 'boolean' },
    open: { control: 'boolean' },
    duration: { control: false },
    action: { control: false },
    centered: { control: false },
    viewportProps: { control: false },
    onOpenChange: { control: false },
    className: { control: false },
    style: { control: false },
  },
} satisfies Meta<typeof BogToast>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Toast: Story = {
  args: {
    title: 'We bog here',
    description:
      'This is a description of something that has happened + what you can do.',
    status: 'success',
    variant: 'filled',
    icon: true,
    button: true,
    action: <span>Button</span>,
    duration: Infinity,
    open: false,
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.open);

    return (
      <div style={{ padding: '2rem' }}>
        <BogToast {...args} open={isOpen} onOpenChange={setIsOpen} />
        <BogButton
          onClick={() => setIsOpen(true)}
          variant="primary"
          size="responsive"
        >
          Show Toast
        </BogButton>
      </div>
    );
  },
};
