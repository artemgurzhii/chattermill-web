'use strict';

const gitRev = require('git-rev-sync');
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

const environment = EmberApp.env();
const isProduction = environment === 'production';

const purgeCSS = {
  module: require('@fullhuman/postcss-purgecss'),
  options: {
    content: [
      // add extra paths here for components/controllers which include tailwind classes
      './app/index.html',
      './app/templates/**/*.hbs',
    ],
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
  },
};

module.exports = function(defaults) {
  const version = gitRev.short();

  /* eslint-disable no-console */
  console.info('\n---------------');
  console.info('environment: ', environment);
  console.info('git version: ', version);
  console.info('---------------\n');
  /* eslint-enable no-console */

  const app = new EmberApp(defaults, {
    hinting: false,
    minifyJS: { enabled: isProduction },
    minifyCSS: { enabled: isProduction },
    sourcemaps: {
      enabled: !isProduction,
      extensions: 'js',
    },
    'ember-ast-hot-load': {
      helpers: ["readable-date"],
      enabled: true
    }
    /* eslint-disable global-require */
    postcssOptions: {
      compile: {
        plugins: [
          {
            module: require('postcss-import'),
            options: {
              path: ['node_modules'],
            },
          },
          require('tailwindcss')('./app/tailwind/config.js'),
          ...isProduction ? [purgeCSS] : [],
        ],
      },
    },
    /* eslint-enable global-require */
    'ember-test-selectors': {
      strip: isProduction,
    },
  });

  return app.toTree();
};
