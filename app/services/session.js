import { inject as service } from '@ember/service';
import Configuration from 'ember-simple-auth/configuration';
import Session from 'ember-simple-auth/services/session';

export default class SessionService extends Session {
  @service router;
  @service currentUser;

  async didAuthenticate() {
    return this.authenticatedUser();
  }

  didInvalidate() {
    this.setCurrentUser(null);
  }

  invalidateSession() {
    if (this.isAuthenticated) this.invalidate();
  }

  willAuthenticate() {
    if (!this.isAuthenticated) return;

    return this.authenticatedUser();
  }

  setCurrentUser(user) {
    this.currentUser.content = user;

    return user;
  }

  authenticatedUser() {
    try {
      this.setCurrentUser({
        isAuthenticated: true,
      });

      return this.transitionToPrivate();
    } catch (error) {
      return this.invalidateSession();
    }
  }

  transitionToPrivate() {
    return this.router.transitionTo(Configuration.routeAfterAuthentication);
  }
}
