'use strict';

const API_HOSTS = {
  test: 'http://chattermill-challenge.com/',
  development: 'http://chattermill-challenge.com/',
  production: 'http://chattermill-challenge.com/',
};

module.exports = function(environment) {
  const ENV = {
    modulePrefix: 'chattermill-web',
    podModulePrefix: 'chattermill-web/pods',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        EMBER_METAL_TRACKED_PROPERTIES: true,
        EMBER_NATIVE_DECORATOR_SUPPORT: true,
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        // https://github.com/DockYard/styleguides/blob/master/engineering/ember.md#dont-use-embers-prototype-extensions
        Array: true,
        Date: false,
        Function: false,
        String: false,
      },
    },

    APP: {},

    CW: {
      host: API_HOSTS[environment],
      namespace: 'api',
    },

    'ember-simple-auth': {
      routeAfterAuthentication: 'authenticated.feed',
      routeIfAlreadyAuthenticated: 'authenticated.feed',
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  ENV.contentSecurityPolicy = {
    'default-src': `'self' ${ENV.CW.host}`,
    'font-src': "'self'",
    'style-src': "'self' 'unsafe-inline'",
    'script-src': "'self'",
    'img-src': "'self'",
    'connect-src': "'self'",
  };

  return ENV;
};
