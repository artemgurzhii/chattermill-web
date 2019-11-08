import Resolver from 'chattermill-web/resolver';
import config from 'ember-get-config';
import loadInitializers from 'ember-load-initializers';
import Application from '@ember/application';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
