/* eslint-disable no-undef */

module.exports = {
  plugins: ['react', 'react-hooks', 'jsx-a11y', 'react-refresh', 'prefer-arrow'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'arrow-body-style': ['error', 'as-needed'],

    'prefer-arrow-callback': ['error', { allowNamedFunctions: true, allowUnboundThis: false }],
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: true,
        classPropertiesAllowed: false,
      },
    ],
  },
};
