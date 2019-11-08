/* eslint-env node */

'use strict';

const path = require('path');

module.exports = function(/* env */) {
  return {
    clientAllowedKeys: ['API_LOGIN', 'API_PASSWORD'],
    failOnMissingKey: true,
    path: path.join(path.dirname(__dirname), '.env'),
  }
};
