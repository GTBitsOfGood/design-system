import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import BogToast from '../components/BogToast/BogToast';
import BogButton from '../components/BogButton/BogButton';

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
      options: ['success', 'error', 'info', 'warning', 'brand'],
    },
    variant: {
      control: 'select',
      options: ['filled', 'outlined'],
    },
    icon: { control: 'boolean' },
    button: { control: 'boolean' },
    duration: { control: 'number' },
    action: { control: false },
    viewportProps: { control: false },
    className: { control: 'text' },
    style: { control: 'text' },
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
    action: <div>Button</div>,
    duration: 0,
  },
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div style={{ padding: '2rem' }}>
        <BogButton
          onClick={() => {
            setOpen(false);
            setTimeout(() => setOpen(true), 100);
          }}
          variant="primary"
          size="responsive"
        >
          Button
        </BogButton>

        <BogToast {...args} open={open} onOpenChange={setOpen} />
      </div>
    );
  },
};
