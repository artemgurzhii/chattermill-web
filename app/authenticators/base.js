import Base from 'ember-simple-auth/authenticators/base';
import RSVP from 'rsvp';
import { isPresent } from '@ember/utils';
import { inject as service } from '@ember/service';

export default class BaseAuthenticator extends Base {
  @service('actions/auth') authActions;

  restore(data) {
    return new RSVP.Promise((resolve, reject) => {
      if (isPresent(data.token)) return resolve(data);

      return reject();
    });
  }

  authenticate({ username, password }) {
    return this.authActions.login({
      username,
      password,
    });
  }

  invalidate() {
    return RSVP.resolve();
  }
}
