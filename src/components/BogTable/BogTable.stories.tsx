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
      { content: 'John Doe' },
      { content: '30' },
      { content: 'USA' },
      { content: 'Developer' },
    ],
  },
  {
    cells: [
      { content: 'Jane Smith' },
      { content: '25' },
      { content: 'Canada' },
      { content: 'Designer' },
    ],
  },
  {
    cells: [
      { content: 'Sam Wilson' },
      { content: '35' },
      { content: 'UK' },
      { content: 'Engineering Manager' },
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
