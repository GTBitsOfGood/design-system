import type { Meta, StoryObj } from '@storybook/react-vite';

import BogCard from '../components/BogCard/BogCard';

const meta: Meta<typeof BogCard> = {
  title: 'Card',
  component: BogCard,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['surface', 'classic', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['1', '2', '3', 'responsive'],
    },
    children: {
      control: false,
    },
    className: { table: { disable: true }, control: false },
    asChild: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const avatarPxForSize = (size: '1' | '2' | '3'): number => {
  if (size === '1') return 60;
  if (size === '2') return 72;
  return 86;
};

const nameClassForSize = (size: '1' | '2' | '3'): string => {
  if (size === '1') return 'text-heading-4';
  if (size === '2') return 'text-heading-3';
  return 'text-heading-2';
};

const PersonContent = ({ size }: { size: '1' | '2' | '3' }) => {
  const avatarPx = avatarPxForSize(size);
  const nameClass = nameClassForSize(size);
  const nameStyle = { fontWeight: 800 };
  const roleClass =
    size === '1'
      ? 'text-paragraph-2'
      : size === '2'
        ? 'text-paragraph-1'
        : 'text-heading-3';
  const roleStyle =
    size === '3'
      ? {
          color: 'var(--color-grey-text-weak)',
          fontWeight: 700,
          fontFamily: 'var(--font-paragraph)',
        }
      : { color: 'var(--color-grey-text-weak)', fontWeight: 700 };
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
      <div
        style={{
          width: avatarPx,
          height: avatarPx,
          borderRadius: '50%',
          background:
            'radial-gradient(circle at 30% 30%, #FC5B43 0%, #FD8033 55%, #FB3552 100%)',
          boxShadow:
            'inset 0 0.4rem 0.6rem rgba(255,255,255,0.45), 0 0.1rem 0.2rem rgba(0,0,0,0.05)',
        }}
      />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span className={nameClass}>
          <strong style={nameStyle}>Johnny Appleseed</strong>
        </span>
        <span className={roleClass} style={roleStyle}>
          Developer
        </span>
      </div>
    </div>
  );
};

export const Card: Story = {
  args: {
    variant: 'classic',
    size: '2',
  },
  render: (args) => (
    <BogCard {...args}>
      <PersonContent
        size={args.size === 'responsive' ? '2' : (args.size as '1' | '2' | '3')}
      />
    </BogCard>
  ),
};
