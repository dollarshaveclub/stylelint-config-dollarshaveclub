'use strict'

module.exports = {
  extends: [require.resolve('./')],
  plugins: [
    // 'stylelint-scss',
    'stylelint-order',
  ],
  rules: {
    'at-rule-no-unknown': [true, {
      'ignoreAtRules': [
        'at-root',
        'mixin',
        'for',
        'include',
        'content',
        'each',
        'function',
        'return',
        'if',
      ],
    }],
    'order/properties-alphabetical-order': true,
  },
}
