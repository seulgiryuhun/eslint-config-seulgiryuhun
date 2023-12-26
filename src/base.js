/* eslint-disable no-undef */
module.exports = {
  extends: ['plugin:import/errors', 'eslint:recommended', 'prettier'],
  plugins: ['json-format', 'prettier', 'simple-import-sort'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        quotes: ['error', 'single'],
        semi: true,
        tabWidth: 2,
        useTabs: false,
        trailingComma: 'all',
        printWidth: 100,
        arrowParens: 'always',
      },
    ],
  },
};

