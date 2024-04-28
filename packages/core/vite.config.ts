/// <reference types="vitest" />
import path from 'node:path';
import { defineConfig } from 'vitest/config';

// eslint-disable-next-line import/no-default-export -- required by Vite
export default defineConfig({
  test: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    coverage: {
      reporter: ['text', 'json-summary'],
      reportOnFailure: true,
    },
  },
});
