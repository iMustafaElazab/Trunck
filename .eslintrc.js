module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:eslint-comments/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  ignorePatterns: [
    '.eslintrc.js',
    'babel.config.js',
    'metro.config.js',
    'jest.config.js',
    'commitlint.config.js',
    'react-native.config.js',
    '/@types/*',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['autofix', 'import', 'react-func', '@tanstack/query'],
  rules: {
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE'],
      },
      {
        selector: 'variable',
        types: ['function'],
        format: ['PascalCase', 'camelCase'],
      },
      {
        selector: 'function',
        format: ['PascalCase', 'camelCase'],
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'enumMember',
        format: ['UPPER_CASE'],
      },
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'require',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: [
          'classProperty',
          'objectLiteralProperty',
          'typeProperty',
          'classMethod',
          'objectLiteralMethod',
          'typeMethod',
          'accessor',
          'enumMember',
        ],
        format: null,
        modifiers: ['requiresQuotes'],
      },
      {
        selector: ['objectLiteralProperty'],
        format: null,
        filter: {
          regex: '(screen_name|screen_class)',
          match: true,
        },
      },
    ],
    'arrow-body-style': ['error', 'as-needed'],
    'react/self-closing-comp': ['error', {component: true, html: true}],
    'autofix/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
        destructuredArrayIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {prefer: 'type-imports'},
    ],
    'import/no-unresolved': 'error',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        pathGroups: [
          {pattern: '@src/**/**', group: 'parent', position: 'before'},
        ],
        alphabetize: {order: 'asc'},
      },
    ],
    'no-restricted-imports': ['error', {patterns: ['../']}],
    'react/no-array-index-key': ['error'],
    eqeqeq: [1, 'allow-null'],
    complexity: ['warn', 20],
    'max-depth': ['warn', 5],
    'max-nested-callbacks': ['warn', 10],
    'max-params': ['warn', 4],
    'max-lines': ['warn', 300],
    'max-statements': ['warn', 10, {ignoreTopLevelFunctions: true}],
    'react-func/max-lines-per-function': ['warn', 50],
    'react-func/max-combined-conditions': ['error', 1],
    'eslint-comments/no-use': ['error', {allow: []}],
    'react-hooks/exhaustive-deps': 1,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
};
