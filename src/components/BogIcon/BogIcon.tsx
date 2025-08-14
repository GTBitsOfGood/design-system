import React, { ElementType } from 'react';
import * as PhosphorIcons from '@phosphor-icons/react';
import './styles.module.css';

export type IconName =
  | 'arrow-fat-up'
  | 'arrow-fat-down'
  | 'arrow-fat-left'
  | 'arrow-fat-right'
  | 'chevron-up'
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-right'
  | 'caret-up'
  | 'caret-down'
  | 'caret-left'
  | 'caret-right'
  | 'arrow-up'
  | 'arrow-down'
  | 'arrow-left'
  | 'arrow-right'
  | 'check'
  | 'map-pin'
  | 'chats'
  | 'hand-heart'
  | 'calendar'
  | 'users'
  | 'download'
  | 'pushpin'
  | 'close'
  | 'search'
  | 'trash'
  | 'share'
  | 'copy'
  | 'gear'
  | 'info'
  | 'pause'
  | 'play'
  | 'user'
  | 'folder'
  | 'bell'
  | 'plus'
  | 'x'
  | 'error'
  | 'warning'
  | 'success';

// Include all props from Phosphor Icons
interface BogIconProps extends React.ComponentProps<typeof PhosphorIcons.XIcon> {
  /** The unique name that identifies the icon. */
  name: IconName;
  /** The size of the icon, can be a number of pixels or a string with CSS units. */
  size?: number | string;
  /** The color of the icon. */
  color?: string;
  /**
   * The weight of the icon. Options are 'thin', 'light',
   * 'regular', 'bold', 'fill', or 'duotone'.
   */
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';
  /** Whether the icon is flipped horizontally or not. */
  mirrored?: boolean;
  /** The alt text of the icon. */
  alt?: string;
}

const weightFillIcons = new Set([
  'map-pin',
  'chats',
  'calendar',
  'users',
  'pushpin',
  'close',
  'trash',
  'share',
  'copy',
  'gear',
  'pause',
  'play',
  'user',
  'folder',
  'bell',
  'arrow-fat-up',
  'arrow-fat-down',
  'arrow-fat-left',
  'arrow-fat-right',
  'hand-heart',
  'download',
]);

const boldFillIcons = new Set([
  'check',
  'search',
  'info',
  'plus',
  'x',
  'success',
  'error',
  'warning',
  'arrow-up',
  'arrow-down',
  'arrow-left',
  'arrow-right',
  'caret-up',
  'caret-down',
  'caret-left',
  'caret-right',
]);

const BogIcon: React.FC<BogIconProps> = ({
  name,
  size,
  color,
  weight: customWeight,
  mirrored,
  alt,
  className,
  style,
}) => {
  // Map custom names to actual Phosphor components
  const iconMap: Record<string, string> = {
    chats: 'ChatsCircle',
    calendar: 'CalendarDots',
    download: 'DownloadSimple',
    pushpin: 'PushPinSimple',
    close: 'XCircle',
    search: 'MagnifyingGlass',
    share: 'ShareFat',
    copy: 'CopySimple',
    user: 'UserCircle',
    folder: 'FolderSimple',
    bell: 'BellSimpleRinging',
    success: 'CheckCircle',
    error: 'WarningOctagon',
  };

  // Handle chevron special case (use caret with weight="fill")
  const isChevron = name.startsWith('chevron-');
  let iconName = iconMap[name];
  if (isChevron) {
    iconName = 'Caret' + name.charAt(8).toUpperCase() + name.slice(9);
  } else if (iconName === undefined) {
    iconName = name.charAt(0).toUpperCase() + name.slice(1);
    iconName = iconName.replace(/-(.)/g, (_, nextChar) => nextChar.toUpperCase());
  }

  // Get the icon component from PhosphorIcons
  const IconComponent = (PhosphorIcons[iconName as keyof typeof PhosphorIcons] as ElementType) || null;

  if (!IconComponent) {
    console.warn(`BogIcon: Unknown icon name "${name}"`);
    return null;
  }

  // Only use default weight if custom weight is not provided
  let weight = customWeight;
  if (!weight) {
    if (weightFillIcons.has(name) || isChevron) {
      weight = 'fill';
    } else if (boldFillIcons.has(name)) {
      weight = 'bold';
    } else {
      weight = 'regular';
    }
  }

  return (
    <IconComponent
      weight={weight}
      size={size}
      color={color}
      mirrored={mirrored}
      alt={alt}
      className={className}
      style={style}
    />
  );
};

export default BogIcon;
