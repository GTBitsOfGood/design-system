import { Table, Theme } from '@radix-ui/themes';
import React, { ReactElement } from 'react';
import styles from './styles.module.css';
import { useResponsive } from '../../utils/hooks/useResponsive';
import { getSizeFromBreakpoint } from '../../utils/breakpoints/breakpoints';
import '@radix-ui/themes/styles.css';

export type ColumnHeaderCellContent = {
  /** Props forwarded to Radix Table.Cell / Table.RowHeaderCell */
  styleProps?: React.ComponentProps<typeof Table.ColumnHeaderCell>;
  /** Cell text/content */
  content: string;
};

export type RowCellContent = {
  /** Props forwarded to Radix Table.Cell / Table.RowHeaderCell */
  styleProps?: React.ComponentProps<typeof Table.Cell>;
  /** Cell text/content */
  content: ReactElement;
};

export type TableRow = {
  /** Props forwarded to Radix Table.Row */
  styleProps?: React.ComponentProps<typeof Table.Row>;
  /** Cells for this row (first becomes RowHeaderCell) */
  cells: RowCellContent[];
};

interface BogTableProps
  extends Omit<React.ComponentProps<typeof Table.Root>, 'size'> {
  /** Column headers for the table (rendered in thead) */
  columnHeaders: ColumnHeaderCellContent[];
  /** Data rows (rendered in tbody) */
  rows: TableRow[];
  /** Visual size; responsive maps breakpoints -> small|medium|large */
  size?: 'small' | 'medium' | 'large' | 'responsive';
  /** Tailwind / custom class names */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
}

function mapSizeToRadix(size: 'small' | 'medium' | 'large'): '1' | '2' | '3' {
  if (size === 'small') return '1';
  if (size === 'medium') return '2';
  return '3';
}

const BogTable: React.FC<BogTableProps> = ({
  columnHeaders,
  rows,
  size = 'responsive',
  className,
  style,
  ...rootProps
}) => {
  const breakpoint = useResponsive();
  const resolvedSize =
    size === 'responsive' ? getSizeFromBreakpoint(breakpoint) : size;
  const radixSize = mapSizeToRadix(resolvedSize);

  const sizeClass = `size${radixSize}`;

  return (
    <Theme>
      <div className={styles.container}>
        <Table.Root
          {...rootProps}
          size={radixSize}
          className={`${styles.root} ${className || ''}`}
          style={style}
        >
          <Table.Header>
            <Table.Row className={styles.headerRow}>
              {columnHeaders.map((header, i) => (
                <Table.ColumnHeaderCell
                  key={`col-${i}`}
                  {...header.styleProps}
                  className={`${styles.columnHeaderCell} ${styles.cellBase} ${styles[sizeClass]}`}
                >
                  {header.content}
                </Table.ColumnHeaderCell>
              ))}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {rows.map((row, rIdx) => (
              <Table.Row key={`row-${rIdx}`} {...row.styleProps}>
                {row.cells.map((cell, cIdx) =>
                  cIdx === 0 ? (
                    <Table.RowHeaderCell
                      key={`row-${rIdx}-cell-${cIdx}`}
                      {...cell.styleProps}
                      className={`${styles.rowHeaderCell} ${styles.cellBase} ${styles[sizeClass]}`}
                    >
                      {cell.content}
                    </Table.RowHeaderCell>
                  ) : (
                    <Table.Cell
                      key={`row-${rIdx}-cell-${cIdx}`}
                      {...cell.styleProps}
                      className={`${styles.cell} ${styles.cellBase} ${styles[sizeClass]}`}
                    >
                      {cell.content}
                    </Table.Cell>
                  ),
                )}
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
    </Theme>
  );
};
export default BogTable;
