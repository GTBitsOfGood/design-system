import React, { ReactElement, Dispatch, SetStateAction, useState } from 'react';
import styles from './styles.module.css';
import { Dialog } from 'radix-ui';
import BogButton from '../BogButton/BogButton';
import BogIcon from '../BogIcon/BogIcon';
import { useResponsive } from '../../utils/hooks/useResponsive';
import { getSizeFromBreakpoint } from '../../utils/breakpoints/breakpoints';

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
  /** The size of the button. Values are "small", "medium", "large", or "responsive" which
   * makes the button automatically resize with the screen. */
  size?: 'small' | 'medium' | 'large' | 'responsive';
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

const defaultCloseButton = <BogIcon name="x" size="auto" />;

const defaultTrigger = <BogButton>Click me!</BogButton>;

export default function BogModal({
  size = 'responsive',
  openState,
  defaultOpen = false,
  onOpenChange,
  modal = true,
  closeButton = defaultCloseButton,
  trigger = defaultTrigger,
  contentProps,
  title = <h3>Modal Heading</h3>,
  description = (
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.{' '}
    </span>
  ),
  ...props
}: BogModalProps) {
  const breakpoint = useResponsive();
  const responsiveSize =
    size === 'responsive' ? getSizeFromBreakpoint(breakpoint) : size;

  {
    /* Global CSS classes 'text-heading-n' and 'text-paragraph-n' handle responsiveness between desktop and mobile */
  }
  const titleClass = `${styles.title} ${
    responsiveSize === 'small'
      ? 'text-heading-4'
      : responsiveSize === 'medium'
        ? 'text-heading-3'
        : 'text-heading-2'
  }`;

  const descriptionClass = `${styles.description} ${
    responsiveSize === 'small' ? 'text-paragraph-2' : 'text-paragraph-1'
  }`;

  const buttonSize: 'small' | 'medium' | 'large' | 'responsive' =
    responsiveSize === 'large' ? 'large' : 'medium';

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
          className={`${styles.content} ${styles[responsiveSize]}`}
          onPointerDownOutside={(e) => {
            if (!modal) e.preventDefault();
          }}
          onInteractOutside={(e) => {
            if (!modal) e.preventDefault();
          }}
        >
          <div className={styles.titleContainer}>
            <Dialog.Close className={`${titleClass} ${styles.closeButton}`}>
              {closeButton}
            </Dialog.Close>
            <Dialog.Title className={`${titleClass} ${styles.title}`} asChild>
              {title}
            </Dialog.Title>
          </div>
          <Dialog.Description className={descriptionClass} asChild>
            {description}
          </Dialog.Description>
          <div className={styles.buttonsContainer}>
            <BogButton
              variant="secondary"
              size={buttonSize}
              onClick={() => handleOpenChange(false)}
            >
              Secondary
            </BogButton>
            <BogButton
              variant="primary"
              size={buttonSize}
              onClick={() => handleOpenChange(false)}
            >
              Primary
            </BogButton>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
