import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '640px',
        'desktop': '1024px',
      },
      colors: {
        'brand-text': '#FC5B43',
        'brand-stroke-strong': '#FC5B43CC',
        'brand-stroke-weak': '#FC5B4333',
        'brand-fill': '#FC5B430D',

        'grey-text-strong': '#22070B',
        'grey-text-weak': '#22070BB2',
        'grey-stroke-strong': '#22070B80',
        'grey-off-state': '#22070B26',
        'grey-stroke-weak': '#F9F9F9',
        'grey-fill-weak': '#22070B0D',
        'grey-fill-weaker': '#22070B06',

        'status-blue-text': '#325CE8',
        'status-blue-stroke-strong': '#325CE8CC',
        'status-blue-stroke-weak': '#325CE833',
        'status-blue-fill': '#325CE80D',

        'status-green-text': '#0A7B40',
        'status-green-stroke-strong': '#0A7B40CC',
        'status-green-stroke-weak': '#0A7B4033',
        'status-green-fill': '#0A7B400D',

        'status-amber-text': '#8F6C1A',
        'status-amber-stroke-strong': '#8F6C1ACC',
        'status-amber-stroke-weak': '#8F6C1A33',
        'status-amber-fill': '#8F6C1A0D',

        'status-red-text': '#C73A3A',
        'status-red-stroke-strong': '#C73A3ACC',
        'status-red-stroke-weak': '#C73A3A33',
        'status-red-fill': '#C73A3A0D',

        'solid-bg-sunken': '#F9F9F9',
        'solid-bg-base': '#FFFFFF',
      },
      fontSize: {
        'desktop-display': ['48px', '56px'],
        'desktop-heading-1': ['40px', '48px'],
        'desktop-heading-2': ['32px', '40px'],
        'desktop-heading-3': ['24px', '32px'],
        'desktop-heading-4': ['20px', '24px'],

        'mobile-display': ['32px', '40px'],
        'mobile-heading-1': ['28px', '36px'],
        'mobile-heading-2': ['24px', '32px'],
        'mobile-heading-3': ['20px', '28px'],
        'mobile-heading-4': ['18px', '24px'],

        'desktop-paragraph-1': ['18px', '24px'],
        'desktop-paragraph-2': ['16px', '22px'],
        'desktop-small': ['12px', '18px'],

        'mobile-paragraph-1': ['16px', '24px'],
        'mobile-paragraph-2': ['14px', '22px'],
        'mobile-small': ['12px', '18px'],
      },
      fontFamily: {
        heading: ['Visby Extra Bold', ...defaultTheme.fontFamily.sans],
        paragraph: ['Open Sans Regular', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
