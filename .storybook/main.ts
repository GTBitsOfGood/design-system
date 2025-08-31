import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@chromatic-com/storybook', '@storybook/addon-docs', '@storybook/addon-a11y', '@storybook/addon-vitest'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config, { configType }) {
    // Add Radix UI exclusions
    config.optimizeDeps = config.optimizeDeps || {};
    config.optimizeDeps.exclude = [
      ...(config.optimizeDeps.exclude || []),
      '@radix-ui/react-checkbox',
      '@radix-ui/react-icons',
      '@radix-ui/react-switch',
      '@radix-ui/themes',
    ];

    config.build = config.build || {};
    config.build.rollupOptions = config.build.rollupOptions || {};
    config.build.rollupOptions.external = [
      ...(Array.isArray(config.build.rollupOptions.external) ? config.build.rollupOptions.external : []),
      '@radix-ui/react-checkbox',
      '@radix-ui/react-icons',
      '@radix-ui/react-switch',
      '@radix-ui/themes',
    ];

    return config;
  },
};

export default config;
