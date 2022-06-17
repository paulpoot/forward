module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['jsx-a11y'],
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:react/recommended',
    'plugin:react-perf/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:storybook/recommended',
    'plugin:@next/next/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react-perf/jsx-no-new-function-as-prop': 0,
    'react-perf/jsx-no-new-object-as-prop': 0,
    'react-perf/jsx-no-new-array-as-prop': 0,
    'react-hooks/exhaustive-deps': 2,
    'jsx-a11y/no-autofocus': 0,
    'no-console': [2, { allow: ['warn', 'error'] }],
    '@typescript-eslint/no-non-null-assertion': 2,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-explicit-any': 2,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [1, { varsIgnorePattern: '_' }],
    'no-duplicate-imports': 0,
    '@typescript-eslint/consistent-type-imports': [
      2,
      { prefer: 'type-imports' },
    ],
    'react/prop-types': 'off',
    'jsx-a11y/no-onchange': 0, // Deprecated, see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-onchange.md,
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/camelcase': 'off',
        'no-console': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
