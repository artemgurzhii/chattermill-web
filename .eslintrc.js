const eslintRules = [
  './eslint/best-practices',
  './eslint/errors',
  './eslint/strict',
  './eslint/node',
  './eslint/style',
  './eslint/variables',
  './eslint/es6',
  './eslint/imports',
  './eslint/ember-best-practices',
  './eslint/custom',
].map(require.resolve);

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
  },
  plugins: [
    'ember',
    'qunit',
    'chattermill-web',
  ],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended',
    'plugin:qunit/recommended',
    ...eslintRules,
  ],
  env: {
    browser: false,
    node: true,
    es6: true,
  },
  rules: {},
  overrides: [
    // node files
    {
      files: [
        '.eslintrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'lib/*/index.js',
        'server/**/*.js'
      ],
      env: {
        browser: false,
        node: true
      },
      plugins: ['node'],
      rules: Object.assign({}, require('eslint-plugin-node').configs.recommended.rules, {
        // add your custom rules and overrides for node files here

        // this can be removed once the following is fixed
        // https://github.com/mysticatea/eslint-plugin-node/issues/77
        'node/no-unpublished-require': 'off'
      })
    }
  ]
};
