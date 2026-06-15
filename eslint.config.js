import js from '@eslint/js';
import { fixupPluginRules } from '@eslint/compat';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';

// eslint-plugin-react v7 uses context.getFilename() which ESLint 10 removed.
// fixupPluginRules() shims the deprecated methods back in until the plugin updates.
const react = fixupPluginRules(reactPlugin);

export default [
  js.configs.recommended,
  ...tsPlugin.configs['flat/recommended'],
  {
    ...reactPlugin.configs.flat.recommended,
    plugins: { react },
  },
  reactHooksPlugin.configs.flat.recommended,
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
    },
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'react/prop-types': 'off',
    },
    settings: {
      react: { version: 'detect' },
    },
  },
  prettierConfig,
];
