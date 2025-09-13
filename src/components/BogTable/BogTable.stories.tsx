import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import BogTable, { ColumnHeaderCellContent, TableRow } from './BogTable';

const meta = {
  title: 'Table',
  component: BogTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BogTable>;

export default meta;
type Story = StoryObj<typeof meta>;

const columnHeaders: ColumnHeaderCellContent[] = [
  { content: 'Name' },
  { content: 'Age' },
  { content: 'Country' },
  { content: 'Title' },
];

const rows: TableRow[] = [
  {
    cells: [
      { content: <span>John Doe</span> },
      { content: <span>30</span> },
      { content: <span>USA</span> },
      { content: <span>Developer</span> },
    ],
  },
  {
    cells: [
      { content: <span>Jane Smith</span> },
      { content: <span>25</span> },
      { content: <span>Canada</span> },
      { content: <span>Designer</span> },
    ],
  },
  {
    cells: [
      { content: <span>Sam Wilson</span> },
      { content: <span>35</span> },
      { content: <span>UK</span> },
      { content: <span>Engineering Manager</span> },
    ],
  },
];

export const Default: Story = {
  args: {
    columnHeaders,
    rows,
    size: 'responsive',
  },
};
