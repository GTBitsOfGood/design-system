import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import BogTextInput from './BogTextInput';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Text Input',
  component: BogTextInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof BogTextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const TextInput: Story = {
  args: {
    name: 'text-input',
    placeholder: 'Enter text here',
  },
};

export const WithClickableIcon: Story = {
  args: {
    name: 'clickable-input',
    placeholder: 'Search...',
    iconProps: {
      iconProps: {
        name: 'search',
        size: 18,
      },
      position: 'left',
      onClick: () => alert('Clicked'),
    },
  },
};

export const WithUnclickableIconOnRight: Story = {
  args: {
    label: 'example label',
    name: 'unclickable-input',
    placeholder: 'Search...',
    multiline: true,
    iconProps: {
      iconProps: {
        name: 'search',
        size: 18,
      },
      position: 'right',
    },
  },
};
