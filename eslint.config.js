import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import path from 'path';
import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'url';
import reactPlugin from 'eslint-plugin-react';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const compat = new FlatCompat({
  baseDirectory: dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  {
    extends: compat.extends(
      'plugin:prettier/recommended',
      'prettier',
      'plugin:storybook/recommended',
    ),

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.commonjs,
        ...globals.jest,
        ...globals.node,
      },
    },

    plugins: {
      react: reactPlugin,
    },

    rules: {
      'jsx-a11y/href-no-hash': ['off'],

      'react/jsx-filename-extension': [
        'warn',
        {
          extensions: ['.js', '.jsx'],
        },
      ],

      'max-len': [
        'warn',
        {
          code: 120,
          tabWidth: 2,
          comments: 120,
          ignoreComments: false,
          ignoreTrailingComments: true,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
        },
      ],
    },
  },
  globalIgnores([
    '**/node_modules/',
    '**/.next',
    '**/.config/',
    '**/LICENSE',
    '**/.storybook/',
  ]),
]);
