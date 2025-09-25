import { Table, Theme } from '@radix-ui/themes';
import React, { ReactElement, ReactNode } from 'react';
import styles from './styles.module.css';
import { useResponsive } from '../../utils/hooks/useResponsive';
import {
  getNumericalSizeFromBreakpoint,
  getSizeFromBreakpoint,
} from '../../utils/breakpoints/breakpoints';
import '@radix-ui/themes/styles.css';
import BogTextInput from '../BogTextInput/BogTextInput';
import BogIcon from '../BogIcon/BogIcon';

type ColumnDatatype = 'string' | 'string[]' | 'number' | 'number[]' | 'other';

export type ColumnHeaderCellContent = {
  /** Props forwarded to Radix Table.Cell / Table.RowHeaderCell */
  styleProps?: React.ComponentProps<typeof Table.ColumnHeaderCell>;
  /** Cell text/content */
  content: string;
  /** datatype for sorting behavior */
  datatype?: ColumnDatatype;
};

export type RowCellContent = {
  /** Props forwarded to Radix Table.Cell / Table.RowHeaderCell */
  styleProps?: React.ComponentProps<typeof Table.Cell>;
  /** Cell text/content */
  content: ReactNode;
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
  size?: 'mobile' | 'tablet' | 'desktop' | 'responsive';
  /** Tailwind / custom class names */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
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
    size === 'responsive'
      ? getNumericalSizeFromBreakpoint(breakpoint)
      : getNumericalSizeFromBreakpoint(size);
  const radixSize = resolvedSize;

  const sizeClass = `size${radixSize}`;

  const [query, setQuery] = React.useState('');

  const extractText = (node: ReactNode): string => {
    if (node == null || typeof node === 'boolean') return '';
    if (typeof node === 'string' || typeof node === 'number')
      return String(node);
    if (Array.isArray(node)) return node.map(extractText).join(' ');
    if (React.isValidElement(node)) return extractText(node.props?.children);
    return '';
  };

  const filteredRows = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter((row) =>
      row.cells.some((cell) =>
        extractText(cell.content).toLowerCase().includes(q),
      ),
    );
  }, [rows, query]);

  const handleSearchChange: React.ChangeEventHandler = (e) => {
    const el = e.target as HTMLInputElement;
    if (el && typeof el.value === 'string') setQuery(el.value);
  };

  return (
    <Theme>
      <div className={styles.searchWrapper} onChange={handleSearchChange}>
        <BogTextInput
          name="search"
          placeholder="Enter text to search"
          className={styles.searchWithIcon}
        />
        <BogIcon name="search" size={16} className={styles.searchIcon} />
      </div>
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
                  <BogIcon name="chevron-up" />
                </Table.ColumnHeaderCell>
              ))}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {filteredRows.map((row, rIdx) => (
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
