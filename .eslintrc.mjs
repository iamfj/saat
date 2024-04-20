/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  ignorePatterns: ['apps/**', 'packages/**'],
  extends: [
    require.resolve('@vercel/style-guide/eslint/node'),
    require.resolve('@vercel/style-guide/eslint/typescript'),
  ],
  parserOptions: {
    project,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
};

export default config;
