'use strict';

module.exports = {
  create(context) {
    return {
      /**
       * Determine if setInterval || setTimeout is being used
       * @example `import Ember from 'ember'; setInterval(() => {}, 100)`
       * @param {ESLintNode} node - call expression node
       **/
      CallExpression(node) {
        const { name } = node.callee;

        if (name !== 'setInterval' && name !== 'setTimeout') return;

        context.report({
          node,
          message: 'Use Ember runloop instead of setInterval/setTimeout',
        })
      },
    };
  },
  meta: {
    deprecated: false,
    docs: {
      category: 'Possible Errors',
      description: 'Prevent usage of setInterval/setTimeout',
      recommended: true
    },
  },
};
