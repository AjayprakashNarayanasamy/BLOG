module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    worker: true,
  },
  extends: [
    'react-app',
    'react-app/jest',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'no-undef': 0,
    'react/jsx-boolean-value': 0,
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'linebreak-style': 0,
    quotes: 0,
    semi: ['error', 'always'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': 0,
    'no-unused-vars': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    'react-hooks/exhaustive-deps': 0,
    'react/jsx-props-no-spreading': 0,
    '@typescript-eslint/no-empty-function': 0,
    'consistent-return': 0,
    'react/function-component-definition': 0,
    'no-shadow': 0,
    '@typescript-eslint/no-explicit-any': 0, // need to on
    'import/no-import-module-exports': 0,
    'no-param-reassign': 0,
    'import/prefer-default-export': 0,
    'no-nested-ternary': 0,
    'max-classes-per-file': ['error', { ignoreExpressions: true, max: 10 }],
    'no-empty-function': ['error', { allow: ['constructors'] }],
    'no-use-before-define': 0,
    'no-useless-constructor': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'react/require-default-props': 0,
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  ignorePatterns: [
    'webpack.config.js',
    './config/**.js',
    './public/scripts/*.js',
    './tsconfig.json',
    './packages/*',
    './ci/*',
  ],
  globals: {
    google: 'readonly',
    NodeJS: 'readonly',
    NodeListOf: 'readonly',
    HTMLTableDataCellElement: 'readonly',
    React: 'readonly',
    self: 'readonly',
  },
};
