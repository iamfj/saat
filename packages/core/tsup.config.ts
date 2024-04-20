import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/cli.ts'],
  splitting: true,
  sourcemap: false,
  clean: true,
  dts: true,
});
