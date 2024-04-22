import { defineConfig } from 'tsup';

// eslint-disable-next-line import/no-default-export -- required by tsup
export default defineConfig({
  entry: ['src/index.ts', 'src/cli.ts'],
  splitting: true,
  sourcemap: false,
  clean: true,
  dts: true,
});
