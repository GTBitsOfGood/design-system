// src/components/BogBanner/BogBanner.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Banner from './BogBanner';

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

const meta = {
  title: 'Banner',
  id: 'bogbanner',
  component: Banner,
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
    iconName: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
      description: 'BogIcon name',
    },
    highContrast: { control: 'boolean' },
    role: { control: 'text' },
    className: { control: 'text' },
    style: { control: 'object' },
    fontSize: { control: 'number' },
  },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    type: 'message',
    tone: 'filled',
    iconName: 'info',
    content: <span>Short message to attract user’s attention.</span>,
    fontSize: 16,
  },
  render: (args) => (
    <div style={WRAPPER_STYLE}>
      <Banner {...args} />
    </div>
  ),
};

export const AllMainComponents: Story = {
  name: 'All Main Components',
  args: {
    type: 'message',
    tone: 'filled',
    iconName: 'info',
    content: <span />,
    fontSize: 16,
  },
  render: () => (
    <div style={WRAPPER_STYLE}>
      {/* filled */}
      <Banner
        type="error"
        tone="filled"
        iconName="error"
        content={<span>This is the description.</span>}
      />
      <Banner
        type="success"
        tone="filled"
        iconName="success"
        content={<span>This is the description.</span>}
      />
      <Banner
        type="warning"
        tone="filled"
        iconName="warning"
        content={<span>This is the description.</span>}
      />
      <Banner
        type="message"
        tone="filled"
        iconName="info"
        content={<span>This is the description.</span>}
      />
      <Banner
        type="brand-message"
        tone="filled"
        iconName="info"
        content={<span>This is the description.</span>}
      />

      {/* outlined */}
      <Banner
        type="error"
        tone="outlined"
        iconName="error"
        content={<span>This is the description.</span>}
      />
      <Banner
        type="success"
        tone="outlined"
        iconName="success"
        content={<span>This is the description.</span>}
      />
      <Banner
        type="warning"
        tone="outlined"
        iconName="warning"
        content={<span>This is the description.</span>}
      />
      <Banner
        type="message"
        tone="outlined"
        iconName="info"
        content={<span>This is the description.</span>}
      />
      <Banner
        type="brand-message"
        tone="outlined"
        iconName="info"
        content={<span>This is the description.</span>}
      />
    </div>
  ),
};
