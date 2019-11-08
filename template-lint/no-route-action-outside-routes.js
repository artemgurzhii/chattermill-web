'use strict';

const Rule = require('ember-template-lint').Rule;
const message = 'Unexpected route-action usage. Only use route-action within a route template.';

function getModuleName(visitor) {
  return visitor._templateEnvironmentData.moduleName;
}

function isRouteTemplate(moduleName) {
  return moduleName.indexOf('components/') === -1;
}

module.exports = class NoRouteActionOutsideRoutes extends Rule {
  _checkForRouteAction(node) {
    if (this.__isRouteTemplate === true) return;

    if (node.path.original === 'route-action') {
      this.log({
        message,
        line: node.loc && node.loc.start.line,
        column: node.loc && node.loc.start.column,
        source: this.sourceForNode(node),
      });
    }
  }

  visitor() {
    this.__isRouteTemplate = isRouteTemplate(getModuleName(this));

    return {
      MustacheStatement: this._checkForRouteAction,
      BlockStatement: this._checkForRouteAction,
      SubExpression: this._checkForRouteAction,
    };
  }
};

module.exports.message = message;
