import React, {
  Dispatch,
  ReactElement,
  SetStateAction,
  CSSProperties,
  useState,
} from 'react';
import { Popover } from 'radix-ui';
import BogIcon from '../BogIcon/BogIcon';
import styles from './styles.module.css';

interface OpenState {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

interface BogPopoverContentProps
  extends React.ComponentProps<typeof Popover.Content> {
  className?: string;
  style?: CSSProperties;
}

interface BogPopoverArrowProps
  extends React.ComponentProps<typeof Popover.Arrow> {
  className?: string;
  style?: CSSProperties;
}

interface BogPopoverCloseProps
  extends React.ComponentProps<typeof Popover.Close> {
  closeButton?: ReactElement;
  className?: string;
  style?: CSSProperties;
}

interface BogPopoverProps extends React.ComponentProps<typeof Popover.Root> {
  trigger: ReactElement;
  content: ReactElement;
  openState?: OpenState;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  modal?: boolean;
  contentProps?: BogPopoverContentProps;
  arrowProps?: BogPopoverArrowProps;
  closeProps?: BogPopoverCloseProps;
  style?: CSSProperties;
  className?: string;
}

export default function BogPopover({
  trigger,
  content,
  openState,
  defaultOpen = false,
  onOpenChange,
  modal = false,
  contentProps,
  arrowProps,
  closeProps,
  className,
  ...props
}: BogPopoverProps) {
  const [internalOpen, setInternalOpen] = useState<boolean>(defaultOpen);
  const open = openState ? openState.open : internalOpen;
  const setOpen = openState ? openState.setOpen : setInternalOpen;

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (onOpenChange) onOpenChange(newOpen);
  };

  const closeButton = closeProps?.closeButton || (
    <BogIcon name="close" size="24" />
  );

  const finalContentProps = contentProps || { side: 'top' };

  return (
    <Popover.Root
      open={open}
      onOpenChange={handleOpenChange}
      modal={modal}
      {...props}
    >
      <Popover.Trigger className={styles.trigger} asChild>
        {trigger}
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className={`${styles.content} ${className}`}
          {...finalContentProps}
        >
          {content}
          <Popover.Close className={styles.close} {...closeProps}>
            {closeButton}
          </Popover.Close>
          <Popover.Arrow className={styles.arrow} {...arrowProps} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
