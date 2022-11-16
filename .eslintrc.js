module.exports = {
  extends: ['standard', 'prettier'],

  plugins: ['prettier'],

  env: {
    jest: true,
    node: true,
    browser: true,
  },

  rules: {
    /* It's better to have indent for call expr with multi-lines */
    indent: ['error', 2, { CallExpression: { arguments: 1 } }],
    /* Removed to save some bytes */
    'standard/no-callback-literal': 0,
    'no-mixed-operators': 0,
    /* Prettier doesn't support following rules */
    'space-before-function-paren': 0,
    'indent': 0,
    /* Check for NaN */
    'no-self-compare': 0,
  },
}
