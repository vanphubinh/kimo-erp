import { devtools } from '@tanstack/devtools-vite';
import { tanstackStart } from '@tanstack/solid-start/plugin/vite';
import { defineConfig } from 'vite';
import viteSolid from 'vite-plugin-solid';

export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    // must be first — https://tanstack.com/devtools/latest/docs/vite-plugin
    devtools(),
    tanstackStart({
      spa: {
        enabled: true,
      },
    }),
    // solid's vite plugin must come after Start's vite plugin
    viteSolid({ ssr: true }),
  ],
});
