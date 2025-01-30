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
  const iconName = iconMap[name] || name.replace(/-/g, '').charAt(0).toUpperCase() + name.replace(/-/g, '').slice(1);

  // Get the icon component from PhosphorIcons
  const IconComponent = PhosphorIcons[iconName as keyof typeof PhosphorIcons] || null;

  if (!IconComponent) {
    console.warn(`BogIcon: Unknown icon name "${name}"`);
    return null;
  }

  return <IconComponent weight={isChevron || weightFillIcons.has(name) ? 'fill' : 'regular'} />;
};

export default BogIcon;
