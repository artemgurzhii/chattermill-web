import config from 'ember-get-config';
import EmberRouter from '@ember/routing/router';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('login');
  this.route('authenticated', { path: '' });
});
