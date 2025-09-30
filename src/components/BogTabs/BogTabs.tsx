import * as Tabs from '@radix-ui/react-tabs';
import React from 'react';
import styles from './styles.module.css';
import { useResponsive } from '../../utils/hooks/useResponsive';
import { Link } from 'react-router';

export type BogTab = {
  label: string;
  content: React.ReactNode;
  href?: string;
};

export interface BogTabsProps extends React.ComponentProps<typeof Tabs.Root> {
  /** The tab value to select by default */
  defaultValue: string;
  /** Map of tab value to BogTab (label/content) */
  tabContents: Record<string, BogTab>;
  /** Responsive size: 1=mobile/tablet, 2=desktop. If not provided, uses useResponsive */
  size?: 1 | 2;
  /** Additional class names for tab styling */
  className?: string;
  /** Additional CSS styles for tab styling */
  style?: React.CSSProperties;
}

function getTabsSizeClass(size: 1 | 2) {
  return size === 2 ? styles['bog-tabs-desktop'] : styles['bog-tabs-mobile'];
}

export const BogTabs: React.FC<BogTabsProps> = ({
  defaultValue,
  tabContents,
  size,
  className = '',
  style,
  ...rootProps
}) => {
  const breakpoint = useResponsive();
  // Map responsive breakpoint to size if not provided
  const responsiveSize = size ?? (breakpoint === 'desktop' ? 2 : 1);

  const rootClass = `${styles['bog-tabs-root']} ${className}`.trim();
  const listClass =
    `${styles['bog-tabs-list']} ${getTabsSizeClass(responsiveSize)}`.trim();
  return (
    <Tabs.Root
      defaultValue={defaultValue}
      className={rootClass}
      style={style}
      {...rootProps}
    >
      <Tabs.List className={listClass}>
        {Object.entries(tabContents).map(([value, { label, href }]) => (
          <Tabs.Trigger
            key={value}
            value={value}
            className={styles['bog-tabs-trigger']}
            onClick={(e) => {
              if (href) {
                e.preventDefault();
                window.open(href, '_blank', 'noopener,noreferrer');
              }
            }}
          >
            <div className={styles['bog-tabs-label']}>{label}</div>
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {Object.entries(tabContents).map(([value, { content, href }]) => (
        <Tabs.Content
          key={value}
          value={value}
          className={styles['bog-tabs-content']}
        >
          {!href ? content : null}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};

export default BogTabs;
