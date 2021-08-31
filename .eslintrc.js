module.exports = {
  root: true,
  env: {
      browser: true,
      es6: true
  },
  extends: [
      '@react-native-community',
      'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
      'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
      'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
      'plugin:prettier/recommended' // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  settings: {
      react: {
          version: 'detect'
      }
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
      ecmaFeatures: {
          jsx: true
      },
      ecmaVersion: 12,
      sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'react/display-name': 'off',
      'react/prop-types': 'off',
      'react-hooks/exhaustive-deps': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'no-shadow': 'off', // replaced by ts-eslint rule below
      '@typescript-eslint/no-shadow': 'error'
  }
};
