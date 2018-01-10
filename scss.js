"use strict"

module.exports = {
  extends: [require.resolve("./")],
  plugins: [
    // 'stylelint-scss',
    'stylelint-order',
  ],
  rules: {
    'at-rule-no-unknown': [true, {
      'ignoreAtRules': [
        'mixin',
        'for',
        'include',
        'content',
        'each',
        'function',
        'return',
      ],
    }],
    'order/properties-alphabetical-order': true,
  },
}
