import React from 'react';
import type { Preview } from '@storybook/react-vite';
import './preview.css';
import '../src/styles/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
};

export const decorators: Preview['decorators'] = [
  (Story, context) => (
    <div
      style={{
        minHeight: '100%',
        minWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ flex: '1' }}>
        <Story />
      </div>

      {context.viewMode !== 'docs' && (
        <footer
          style={{
            minWidth: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            position: 'absolute',
            bottom: '1%',
            right: '1%',
          }}
        >
          <a target="_blank" href="https://www.netlify.com">
            <img
              style={{ height: '6vh', width: '100%' }}
              src="https://www.netlify.com/assets/badges/netlify-badge-dark.svg"
              alt="Deploys by Netlify"
            />
          </a>
        </footer>
      )}
    </div>
  ),
];

export default preview;
