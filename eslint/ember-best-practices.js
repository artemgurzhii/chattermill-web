const ERROR = 2;

module.exports = {
  rules: {
    'ember/alias-model-in-controller': 'off',
    'ember/avoid-leaking-state-in-ember-objects': 'error',
    'ember/avoid-using-needs-in-controllers': 'error',
    'ember/closure-actions': 'error',
    'ember/jquery-ember-run': 'error',
    'ember/named-functions-in-promises': 'off',
    'ember/new-module-imports': 'error',
    'ember/no-attrs-in-components': 'error',
    'ember/no-attrs-snapshot': 'error',
    'ember/no-capital-letters-in-routes': 'error',
    'ember/no-deeply-nested-dependent-keys-with-each': 'error',
    'ember/no-duplicate-dependent-keys': 'error',
    'ember/no-ember-super-in-es-classes': 'error',
    'ember/no-ember-testing-in-module-scope': 'error',
    'ember/no-empty-attrs': 'error',
    'ember/no-function-prototype-extensions': 'error',
    'ember/no-global-jquery': 'error',
    'ember/no-invalid-debug-function-arguments': 'error',
    // TODO: need to enable this once jquery is removed
    'ember/no-jquery': 'warn',
    'ember/no-new-mixins': 'error',
    'ember/no-observers': 'error',
    'ember/no-old-shims': 'error',
    'ember/no-on-calls-in-components': 'error',
    'ember/no-restricted-resolver-tests': 'off',
    'ember/no-side-effects': 'error',
    'ember/no-test-and-then': 'error',
    'ember/no-test-import-export': 'error',
    'ember/no-unnecessary-index-route': 'error',
    'ember/no-unnecessary-route-path-option': 'error',
    'ember/no-unnecessary-service-injection-argument': 'error',
    'ember/route-path-style': 'error',

    'ember/require-super-in-init': 'error',
    'ember/require-return-from-computed': 'error',
    'ember/routes-segments-snake-case': 'error',
    'ember/use-brace-expansion': 'error',
    'ember/use-ember-get-and-set': 'error',

    'ember/order-in-components': [ERROR, {
      order: [
        'service',
        'property',
        'empty-method',
        'single-line-function',
        'multi-line-function',
        'init',
        'didReceiveAttrs',
        'willRender',
        'willInsertElement',
        'didInsertElement',
        'didRender',
        'didUpdateAttrs',
        'willUpdate',
        'didUpdate',
        'willDestroyElement',
        'willClearRender',
        'didDestroyElement',
        'actions',
        'method',
      ]
    }],

    'ember/order-in-controllers': [ERROR, {
      order: [
        'controller',
        'service',
        'query-params',
        'inherited-property',
        'property',
        'single-line-function',
        'multi-line-function',
        'actions',
        ['method', 'empty-method'],
      ]
    }],
    'ember/order-in-models': [ERROR, {
      order: [
        'service',
        'attribute',
        'relationship',
        'property',
        'single-line-function',
        'multi-line-function',
      ]
    }],
    'ember/order-in-routes': [ERROR, {
      order: [
        'service',
        'inherited-property',
        'property',
        'single-line-function',
        'multi-line-function',
        'beforeModel',
        'model',
        'afterModel',
        'serialize',
        'redirect',
        'activate',
        'setupController',
        'renderTemplate',
        'resetController',
        'deactivate',
        'actions',
        ['method', 'empty-method'],
      ]
    }],

    // NOTE: Deprecated
    // 'ember/avoid-leaking-state-in-components': 'off',
    // 'ember/local-modules': 'off',
  },
};
