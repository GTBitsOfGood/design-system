import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import BogTabs, { BogTab, BogTabsProps } from './BogTabs';

import { InfoIcon } from '@phosphor-icons/react';

const tabContents: Record<string, BogTab> = {
  overview: {
    label: 'Overview',
    content: 'This is the overview tab. You can put any content here.',
  },
  details: {
    label: 'Details',
    content: (
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <InfoIcon size={24} />
        <span>Details tab with a ReactElement icon.</span>
      </div>
    ),
  },
  settings: {
    label: 'Settings',
    content: (
      <button
        style={{ padding: 8, background: 'lightgrey' }}
        onClick={() => alert('Clicked')}
      >
        Click me
      </button>
    ),
  },
};

const meta: Meta<BogTabsProps> = {
  title: 'Tabs',
  component: BogTabs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<BogTabsProps>;

export const Tabs: Story = {
  args: {
    defaultValue: 'overview',
    tabContents,
    size: 2,
  },
};

export const NavigationTabs: Story = {
  args: {
    defaultValue: 'overview',
    tabContents: {
      overview: { label: 'Overview', content: 'Overview content' },
      externalLink: {
        label: 'Navigation',
        content: 'This content should not be displayed',
        href: '#',
      },
    },
    size: 2,
  },
};
