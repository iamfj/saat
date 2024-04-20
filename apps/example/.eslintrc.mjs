const project = resolve(__dirname, 'tsconfig.json');

/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  extends: [
    require.resolve('@vercel/style-guide/eslint/browser'),
    require.resolve('@vercel/style-guide/eslint/react'),
    require.resolve('@vercel/style-guide/eslint/next'),
    require.resolve('@vercel/style-guide/eslint/typescript'),
  ],
  parser: "@typescript-eslint/parser",
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
