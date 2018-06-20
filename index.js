module.exports = {
  extends: "airbnb/base",
  rules: {
    semi: [ "error", "never" ],
    "no-plusplus": "off",
    "no-console": "warn",
    "no-magic-numbers": "off",
    "no-unused-vars": "error",
    "comma-dangle": [ "error", "always" ],
    "eol-last": "error",
    indent: [ "error", 2 ],
    "multiline-comment-style": "off",
    "no-inline-comments": "error",
    eqeqeq: "warn",
    "max-len": [
      "warn",
      {
        "code": 80,
        "comments": 100,
        "ignoreUrls": true
      }
    ],
    camelcase: "warn",
    "no-param-reassign": "warn",
    "no-use-before-define": "off",
    "no-restricted-syntax": "off",
    "guard-for-in": "off",
    "no-underscore-dangle": "off",
    "yoda": [ "error", "always", { onlyEquality: true } ],
    "global-require": "warn",
    "no-warning-comments": [
      "warn",
      {
        "terms": [
          "todo",
          "fixme"
        ],
        "location": "anywhere"
      }
    ],
    "no-void": "off",
    "no-continue": "warn"
  }
}
