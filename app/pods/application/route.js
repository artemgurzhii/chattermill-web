import { getOwner } from '@ember/application';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default class ApplicationRoute extends Route.extend(ApplicationRouteMixin) {
  @service session;

  // NOTE: Development debug mode
  beforeModel() {
    window.app = getOwner(this);
    window.session = this.session;
  }

  sessionAuthenticated() {
    return this.session.didAuthenticate();
  }

  sessionInvalidated() {
    this.session.didInvalidate();

    return super.sessionInvalidated(...arguments);
  }
}
