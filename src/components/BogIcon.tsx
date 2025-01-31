import React from 'react';
import * as PhosphorIcons from '@phosphor-icons/react';

interface BogIconProps {
  name: string;
}

const weightFillIcons = new Set([
  'caution',
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
  'info',
  'pause',
  'play',
  'user',
  'folder',
  'bell',
]);

const BogIcon: React.FC<BogIconProps> = ({ name }) => {
  // Map custom names to actual Phosphor components
  const iconMap: Record<string, string> = {
    chats: 'ChatsCircle',
    calendar: 'CalendarDots',
    download: 'DownloadSimple',
    pushpin: 'PushpinSimple',
    close: 'XCircle',
    search: 'MagnifyingGlass',
    share: 'ShareFat',
    copy: 'CopySimple',
    user: 'UserCircle',
    folder: 'FolderSimple',
    bell: 'BellSimpleRinging',
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
  const IconComponent = PhosphorIcons[iconName as keyof typeof PhosphorIcons] || null;

  if (!IconComponent) {
    console.warn(`BogIcon: Unknown icon name "${name}"`);
    return null;
  }

  return <IconComponent weight={isChevron || weightFillIcons.has(name) ? 'fill' : 'regular'} />;
};

export default BogIcon;
