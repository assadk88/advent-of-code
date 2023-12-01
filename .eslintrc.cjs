module.exports = {
  parserOptions: {
    ecmaVersion: 2020, // or a later version
    sourceType: 'module' // Allows for the use of imports
  },
  env: {
    es6: true, // Enables ES6 global variables
    node: true // If you're running in a Node.js environment
    // other environments such as 'browser', 'jest' if applicable
  },
  extends: [
    // ... other ESLint configurations or plugins
    'plugin:prettier/recommended' // Should be the last configuration in the extends array.
  ],
  plugins: ['prettier'], // Ensure this is included if it's not part of the extends configuration.
  rules: {
    'prettier/prettier': 'error', // Indicates that Prettier errors are actually errors.

    // ESLint rules
    // Encourage use of const over let/var
    'prefer-const': 'error',
    'no-var': 'error',

    // Disallow mutation of function parameters
    'no-param-reassign': 'error',

    // Encourage the use of pure functions
    'no-impure-functions': 'off', // Note: This is not a built-in ESLint rule

    // Disallow use of object and array mutations methods
    'no-array-mutation': 'off', // Note: This is not a built-in ESLint rule
    'no-object-mutation': 'off', // Note: This is not a built-in ESLint rule

    // Disallow traditional loop structures in favor of functional methods like .map, .filter
    'no-loops/no-loops': 'off', // Note: This is not a built-in ESLint rule

    // Other rules that might be relevant
    'arrow-body-style': ['error', 'always'], // Enforce the use of arrow functions
    'func-style': ['error', 'expression'], // Enforce the use of function expressions
    'no-use-before-define': ['error', { functions: false }] // Disallow the use of variables before they are defined
  }
};
