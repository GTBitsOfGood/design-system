import React, { ReactElement, useState, useEffect } from 'react';
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

interface BogModalProps extends React.ComponentProps<typeof Dialog.Root> {
  /** Whether the modal is open by default. */
  defaultOpen: boolean;
  /** Controls whether the modal is open. */
  open: boolean;
  /** Function that is called when the modal is opened or closed. */
  onOpenChange: (open: boolean) => void;
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

const defaultCloseButton = (
  <BogButton variant="tertiary">
    <BogIcon name="close" />
  </BogButton>
);

const defaultTrigger = <BogButton>Click me!</BogButton>;

export default function BogModal({
  defaultOpen,
  open,
  onOpenChange,
  modal = true,
  closeButton = defaultCloseButton,
  trigger = defaultTrigger,
  contentProps,
  title,
  description,
  ...props
}: BogModalProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  useEffect(() => {
    onOpenChange(isOpen);
  }, [isOpen]);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen} {...props}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content {...contentProps} className={styles.content}>
          <Dialog.Title asChild>{title}</Dialog.Title>
          <Dialog.Description asChild>{description}</Dialog.Description>
          <Dialog.Close className={styles.closeButton} asChild>
            {closeButton}
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
