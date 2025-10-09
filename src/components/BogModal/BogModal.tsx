import React, { ReactElement, Dispatch, SetStateAction, useState } from 'react';
import styles from './styles.module.css';
import { Dialog } from 'radix-ui';
import BogButton from '../BogButton/BogButton';
import BogIcon from '../BogIcon/BogIcon';

interface BogModalContentProps
  extends React.ComponentProps<typeof Dialog.Content> {
  /** Additional class names to apply styles to the modal. These can be tailwind classes or custom CSS classes. */
  className?: string;
  /** Additional CSS styles to apply to the modal. */
  style?: React.CSSProperties;
}

interface OpenState {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

interface BogModalProps extends React.ComponentProps<typeof Dialog.Root> {
  /** Controls modal's open/closed state. Takes both {open, setOpen}, which are to be defined by React's useState
   * where open is a boolean value. Alternatively, neither is passed in and a default {open, setOpen} is generated. */
  openState?: OpenState;
  /** Whether the modal is open by default. Useful for when openState is not passed in. */
  defaultOpen?: boolean;
  /** Custom actions that occur when opening/closing the modal. */
  onOpenChange?: (open: boolean) => void;
  /** Whether the dialog is modal (blocks interaction with the rest of the interface) or not. */
  modal?: boolean;
  /** The button to close the modal. */
  closeButton?: ReactElement;
  /** The component that opens the modal. */
  trigger?: ReactElement;
  /** The props to configure the content of the modal. */
  contentProps?: BogModalContentProps;
  /** The title of the modal. */
  title?: ReactElement;
  /** The description of the modal. */
  description?: ReactElement;
}

const defaultCloseButton = <BogIcon name="close" size="24" />;

const defaultTrigger = <BogButton>Click me!</BogButton>;

export default function BogModal({
  openState,
  defaultOpen = false,
  onOpenChange,
  modal = true,
  closeButton = defaultCloseButton,
  trigger = defaultTrigger,
  contentProps,
  title = <span></span>,
  description = <span></span>,
  ...props
}: BogModalProps) {
  const [internalOpen, internalSetOpen] = useState(defaultOpen);
  const open = openState ? openState.open : internalOpen;
  const setOpen = openState ? openState.setOpen : internalSetOpen;

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (onOpenChange) onOpenChange(newOpen);
  };

  return (
    <Dialog.Root
      open={open}
      onOpenChange={handleOpenChange}
      modal={modal}
      {...props}
    >
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content
          {...contentProps}
          className={styles.content}
          onPointerDownOutside={(e) => {
            if (!modal) e.preventDefault();
          }}
          onInteractOutside={(e) => {
            if (!modal) e.preventDefault();
          }}
        >
          {/* Global CSS classes 'text-heading-1' and 'text-paragraph-1' handle responsiveness between desktop and mobile */}
          <Dialog.Title className="text-heading-1" asChild>
            {title}
          </Dialog.Title>
          <Dialog.Description className="text-paragraph-1" asChild>
            {description}
          </Dialog.Description>
          <Dialog.Close className={styles.closeButton}>
            {closeButton}
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
