import { getOwner } from '@ember/application';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default class ApplicationRoute extends Route.extend(ApplicationRouteMixin) {
  @service session;

  beforeModel() {
    // NOTE: Development debug mode
    const app = getOwner(this);
    const session = app.lookup('service:session');

    window.app = app;
    window.session = session;

    super.beforeModel(...arguments);

    return this.session.willAuthenticate();
  }

  sessionAuthenticated() {
    return this.session.didAuthenticate();
  }

  sessionInvalidated() {
    this.session.didInvalidate();

    return super.sessionInvalidated(...arguments);
  }
}
