import type { Config } from "tailwindcss";

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
    },
  },
  plugins: [],
} satisfies Config;
