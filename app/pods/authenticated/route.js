import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default class AuthenticatedRoute extends Route.extend(AuthenticatedRouteMixin) {
  @service session;

  beforeModel() {
    super.beforeModel(...arguments);

    if (this.session.isAuthenticated) {
      this.transitionTo('authenticated.feed');
    }
  }
}
