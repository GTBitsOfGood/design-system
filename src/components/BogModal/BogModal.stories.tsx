import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import BogModal from './BogModal';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Modal',
  component: BogModal,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    closeButton: {
      control: false,
      description:
        'The button to close the modal. Defaults to a BogButton with a BogIcon of a close icon. ' +
        'This cannot be dynamically edited in this page, but you can pass in whatever React component you want.',
    },
    trigger: {
      control: false,
      description:
        'The component that opens the modal. Defaults to a BogButton with the text "Click me!". ' +
        'This cannot be dynamically edited in this page, but you can pass in whatever React component you want.',
    },
    title: {
      control: false,
      description:
        'The title of the modal. ' +
        'This cannot be dynamically edited in this page, but you can pass in whatever React component you want.',
    },
    description: {
      control: false,
      description:
        'The description of the modal. ' +
        'This cannot be dynamically edited in this page, but you can pass in whatever React component you want.',
    },
  },
} satisfies Meta<typeof BogModal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Modal: Story = {
  args: {
    defaultOpen: false,
    open: false,
    onOpenChange: (open) => {
      console.log('set open to ', open);
    },
    title: <h3>Modal Title</h3>,
    description: <span>Modal Description</span>,
  },
};
