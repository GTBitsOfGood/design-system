import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import BogChip from '../components/BogChip/BogChip';
import BogPopover from '../components/BogPopover/BogPopover';
import BogDropdown from '../components/BogDropdown/BogDropdown';
import BogTextInput from '../components/BogTextInput/BogTextInput';
import BogButton from '../components/BogButton/BogButton';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Popover',
  component: BogPopover,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  argTypes: {
    trigger: {
      control: false,
    },
    content: {
      control: false,
    },
    className: { table: { disable: true }, control: false },
    title: {
      control: false,
      description:
        'The title of the popover. ' +
        'This cannot be dynamically edited in this page, but you can pass in whatever React component you want.',
    },
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof BogPopover>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Popover: Story = {
  args: {
    trigger: <BogChip color="cyan">Click me</BogChip>,
    content: (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 15,
          width: '450px',
        }}
      >
        <BogDropdown
          options={['Option 1', 'Option 2']}
          name="condition"
          label="Condition"
          placeholder="Select condition"
        />
        <BogTextInput
          name="value"
          label="Value"
          placeholder="Enter Filter Value"
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <BogButton variant="secondary">Cancel</BogButton>
          <BogButton>Apply Filter</BogButton>
        </div>
      </div>
    ),
  },
};
