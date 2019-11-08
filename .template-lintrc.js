'use strict';

// https://github.com/ember-template-lint/ember-template-lint/blob/master/docs/rules.md
module.exports = {
  plugins: [{
    name: 'chattermill-web-plugin',

    rules: {
      'no-route-action-outside-routes': require('./template-lint/no-route-action-outside-routes'),
    },

    configurations: {
      'recommended': {
        rules: {
          'no-route-action-outside-routes': true
        }
      }
    }
  }],

  extends: [
    'recommended',
    'chattermill-web-plugin:recommended'
  ],

  rules: {
    'quotes': 'double',
    'attribute-indentation': {
      'open-invocation-max-len': 60
    },
    'no-curly-component-invocation': true,
    'block-indentation': 2,
    'eol-last': 'always',
    'img-alt-attributes': true,
    'require-valid-alt-text': true,
    'no-element-event-actions': true,
    'no-extra-mut-helper-argument': true,
    'inline-link-to': true,
    'invocable-blacklist': [],

    'linebreak-style': 'system',
    'link-href-attributes': true,
    'link-rel-noopener': 'strict',

    'no-attrs-in-components': true,
    'no-bare-strings': true,
    'no-debugger': true,
    'no-duplicate-attributes': true,
    'no-html-comments': true,
    'no-implicit-this': true,
    'no-inline-styles': true,
    'no-input-block': true,
    'no-input-tagname': true,
    'no-negated-condition': true,
    'no-invalid-interactive': true,
    'no-log': true,
    'no-nested-interactive': true,
    'no-obsolete-elements': true,
    'no-outlet-outside-routes': true,
    'no-partial': true,
    'no-shadowed-elements': true,
    'no-quoteless-attributes': true,
    'no-trailing-dot-in-path-expression': true,
    'no-trailing-spaces': true,
    'no-triple-curlies': true,
    'no-unbound': true,
    'no-unnecessary-component-helper': true,
    'no-unnecessary-concat': true,
    'no-unused-block-params': true,
    'require-iframe-title': true,
    'quotes': 'double',
    'self-closing-void-elements': true,
    'simple-unless': true,
    'style-concatenation': true,
    'table-groups': true,
    'template-length': {
      max: 100,
      min: 5
    }
  }
};
