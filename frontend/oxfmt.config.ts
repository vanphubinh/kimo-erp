import { defineConfig } from 'oxfmt';

export default defineConfig({
  // Align with .editorconfig for JS/TS (oxfmt also reads editorconfig as fallback).
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  endOfLine: 'lf',
  insertFinalNewline: true,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: false,
  trailingComma: 'all',
  arrowParens: 'always',

  // Keep Solid/TS imports stable across the monorepo.
  sortImports: {
    newlinesBetween: true,
    internalPattern: ['~/', '@/', '#'],
    groups: [
      'type',
      'builtin',
      'external',
      ['internal', 'subpath'],
      ['parent', 'sibling', 'index'],
      'side_effect_style',
      'style',
      'unknown',
    ],
  },

  sortPackageJson: true,

  // Frontend-only tree — still exclude generated/build artifacts explicitly.
  ignorePatterns: [
    '**/node_modules/**',
    '**/dist/**',
    '**/.output/**',
    '**/.vinxi/**',
    '**/.tanstack/**',
    '**/.turbo/**',
    '**/*.gen.*',
    '**/pnpm-lock.yaml',
  ],
});
