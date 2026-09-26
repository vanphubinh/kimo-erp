import solid from 'eslint-plugin-solid/configs/typescript';
import { defineConfig } from 'oxlint';

export default defineConfig({
  jsPlugins: ['eslint-plugin-solid'],
  ignorePatterns: [
    '**/*.gen.*',
    '**/dist/**',
    '**/node_modules/**',
    '**/.output/**',
    '**/.vinxi/**',
    '**/.tanstack/**',
  ],
  rules: solid.rules,
});
