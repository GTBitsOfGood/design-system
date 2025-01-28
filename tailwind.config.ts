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
