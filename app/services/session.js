import { inject as service } from '@ember/service';
import Configuration from 'ember-simple-auth/configuration';
import Session from 'ember-simple-auth/services/session';

export default class SessionService extends Session {
  @service router;

  async didAuthenticate() {
    return this.authenticatedUser();
  }

  didInvalidate() {}

  invalidateSession() {
    if (this.isAuthenticated) this.invalidate();
  }

  willAuthenticate() {
    if (!this.isAuthenticated) return;

    return this.authenticatedUser();
  }

  authenticatedUser() {
    try {
      return this.transitionToPrivate();
    } catch (error) {
      return this.invalidateSession();
    }
  }

  transitionToPrivate() {
    return this.router.transitionTo(Configuration.routeAfterAuthentication);
  }
}
