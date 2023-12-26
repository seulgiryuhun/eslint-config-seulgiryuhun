/* eslint-disable no-undef */
module.exports = {
  plugins: ['@junghyeonsu'],
  extends: ['plugin:eslint-config-seulgiryuhun/base'],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: ['plugin:eslint-config-seulgiryuhun/typescript'],
    },
    {
      files: ['**/*.{jsx,tsx}'],
      extends: ['plugin:eslint-config-seulgiryuhun/react'],
    },
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
};
