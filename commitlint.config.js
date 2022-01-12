module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-line-length': [0, 'always'], // Make sure there is never a max-line-length by disabling the rule
    'subject-case': [1, 'always', 'sentence-case'], // @see https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional#subject-case
    'subject-full-stop': [1, 'always', '.'], // @see https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional#subject-full-stop
  },
};
