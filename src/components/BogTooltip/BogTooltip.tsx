import React, { ReactElement } from 'react';
import { Tooltip } from 'radix-ui';
import styles from './styles.module.css';

interface BogTooltipContentProps
  extends React.ComponentProps<typeof Tooltip.Content> {
  /** Additional class names to apply styles to the tooltip contents. These can be tailwind classes or custom CSS classes. */
  className?: string;
  /** Additional CSS styles to apply to the tooltip contents */
  style?: React.CSSProperties;
}

interface BogTooltipProps
  extends React.ComponentProps<typeof Tooltip.Provider> {
  /** Additional class names to apply styles to the tooltip provider. These can be tailwind classes or custom CSS classes. */
  className?: string;
  /** Optional prop that serves as the content that is hovered over for the tooltip to appear */
  trigger?: ReactElement;
  /** Optional prop that is for the configuration of the tooltip content */
  contentProps?: BogTooltipContentProps;
  /** Optional prop for the time (in ms) it takes for a tooltip to open while hovering on the trigger */
  delayDuration?: number;
  /** Optional prop for the time (in ms) a user has to enter another trigger without incurring a delay again */
  skipDelayDuration?: number;
  /** Optional prop that prevents Tooltip.Content from remaining open when hovering if true */
  disableHoverableContent?: boolean;
  /** Optional prop that represents the open state of the tooltip when it is initally rendered */
  defaultOpen?: boolean;
  /** Optional prop that represents the controlled open state of the tooltip */
  open?: boolean;
  /** Optional prop that is an event handler called when the open state of the tooltip changes.*/
  onOpenChange?: (open: boolean) => void;
  /** Optional prop that is an event handler that is called when the escape key is down. */
  onEscapeKeyDown?: (event: KeyboardEvent) => void;
}

export default function BogTooltip({
  className,
  trigger,
  contentProps,
  delayDuration = 700,
  skipDelayDuration = 300,
  disableHoverableContent = false,
  defaultOpen = false,
  open,
  onOpenChange,
  onEscapeKeyDown,
}: BogTooltipProps) {
  return (
    <div className={className}>
      <Tooltip.Provider
        delayDuration={delayDuration}
        skipDelayDuration={skipDelayDuration}
        disableHoverableContent={disableHoverableContent}
      >
        <Tooltip.Root
          defaultOpen={defaultOpen}
          open={open}
          onOpenChange={onOpenChange}
        >
          <Tooltip.Trigger asChild>{trigger}</Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className={styles['bog-tooltip__content']}
              data-side={contentProps?.side}
              {...contentProps}
              onEscapeKeyDown={onEscapeKeyDown}
            >
              {contentProps?.children}
              <Tooltip.Arrow className={styles['bog-tooltip__arrow']} />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </div>
  );
}
