import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import BogBanner from '../components/BogBanner/BogBanner';

const WRAPPER_STYLE: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  width: 762,
  height: 300,
  paddingTop: 44,
  paddingBottom: 44,
  gap: 24,
  borderBottom: '1px solid #e5e7eb',
};

const meta: Meta<typeof BogBanner> = {
  title: 'Banner',
  id: 'bogbanner',
  component: BogBanner,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['message', 'success', 'warning', 'error', 'brand-message'],
      description: 'Semantic style',
    },
    tone: {
      control: 'inline-radio',
      options: ['filled', 'outlined'],
      description: 'Visual style',
    },
    iconProps: {
      control: 'object',
      description: 'Props forwarded to BogIcon (e.g., { name: "info" })',
    },
    highContrast: { control: 'boolean' },
    role: { control: 'text' },
    className: { control: 'text' },
    style: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Banner: Story = {
  args: {
    type: 'message',
    tone: 'filled',
    iconProps: { name: 'info' },
    content: <span>This is the description.</span>,
  },
  render: (args) => (
    <div style={WRAPPER_STYLE}>
      <BogBanner {...args} />
    </div>
  ),
};
