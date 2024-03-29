module.exports = {
  extends: 'airbnb/base',
  rules: {
    'semi': [ 'error', 'never' ],
    'no-plusplus': 'off',
    'no-console': 'warn',
    'no-magic-numbers': 'off',
    'no-unused-vars': 'error',
    'comma-dangle': [ 'error', 'only-multiline' ],
    'indent': [ 'error', 2 ],
    'multiline-comment-style': 'off',
    'no-inline-comments': 'error',
    'eqeqeq': 'warn',
    'max-len': [
      'warn',
      {
        'code': 80,
        'comments': 100,
        'ignoreUrls': true,
        'ignoreStrings': true,
        'ignoreTemplateLiterals': true
      }
    ],
    'camelcase': 'warn',
    'no-param-reassign': 'off',
    'no-use-before-define': 'off',
    'no-restricted-syntax': 'off',
    'guard-for-in': 'off',
    'no-underscore-dangle': 'off',
    'array-bracket-spacing': [ 'warn', 'always' ],
    'yoda': [ 'error', 'always', { onlyEquality: true } ],
    'global-require': 'warn',
    'no-warning-comments': [
      'warn',
      {
        'terms': [
          'todo',
          'fixme'
        ],
        'location': 'anywhere'
      }
    ],
    'no-void': 'off',
    'no-continue': 'warn',
    'no-multiple-empty-lines': [
      'error', {
        'max': 1,
        'maxEOF': 1,
        'maxBOF': 0
      }
    ],
    'eol-last': [ 'error', 'always' ]
  }
}
