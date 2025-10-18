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
  { content: 'Name', datatype: 'string' },
  { content: 'Age' },
  { content: 'Country' },
  { content: 'Title' },
];

const rows: TableRow[] = [
  {
    cells: [
      { content: 'Pim Pimling' },
      { content: '32' },
      { content: 'USA' },
      { content: 'Developer' },
    ],
  },
  {
    cells: [
      { content: 'Charlie Dompler' },
      { content: '25' },
      { content: 'Canada' },
      { content: 'Designer' },
    ],
  },
  {
    cells: [
      { content: 'Glep' },
      { content: '35' },
      { content: 'UK' },
      { content: 'Engineering Manager' },
    ],
  },
  {
    cells: [
      { content: 'Glep' },
      { content: '28' },
      { content: 'Spamtopia' },
      { content: 'Mr Frog' },
    ],
  },
];

const columnHeaders2: ColumnHeaderCellContent[] = [
  { content: 'Product', datatype: 'string' },
  { content: 'Price', datatype: 'string' },
  { content: 'Stock', datatype: 'string' },
  { content: 'Icon', datatype: 'other' },
];

const createProduceIcon = (label: string, color: string) => (
  <span
    role="img"
    aria-label={`${label} icon`}
    title={label}
    style={{
      display: 'inline-block',
      width: 12,
      height: 12,
      borderRadius: '50%',
      backgroundColor: color,
      boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.08)',
    }}
  />
);

const rows2: TableRow[] = [
  {
    cells: [
      { content: 'Apple' },
      { content: '$1.99' },
      { content: '120' },
      {
        content: createProduceIcon('Apple', '#d32f2f'),
        styleProps: { style: { textAlign: 'center' } },
      },
    ],
  },
  {
    cells: [
      { content: 'Banana' },
      { content: '$0.89' },
      { content: '80' },
      {
        content: createProduceIcon('Banana', '#fbc02d'),
        styleProps: { style: { textAlign: 'center' } },
      },
    ],
  },
  {
    cells: [
      { content: 'Avocado' },
      { content: '$2.49' },
      { content: '25' },
      {
        content: createProduceIcon('Avocado', '#4caf50'),
        styleProps: { style: { textAlign: 'center' } },
      },
    ],
  },
  {
    cells: [
      { content: 'Carrot' },
      { content: '$0.59' },
      { content: '300' },
      {
        content: createProduceIcon('Carrot', '#fb8c00'),
        styleProps: { style: { textAlign: 'center' } },
      },
    ],
  },
];

export const Table: Story = {
  args: {
    columnHeaders,
    rows,
    size: 'responsive',
  },
};

export const TableWithNonSortableColumn: Story = {
  args: {
    columnHeaders: columnHeaders2,
    rows: rows2,
    size: 'responsive',
  },
};
