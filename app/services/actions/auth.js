import Service, { inject as service } from '@ember/service';

const LOGIN_URL = 'https://chattermill-challenge.com/login';

export default class ActionsAuthService extends Service {
  @service requests;

  async login({ username, password }) {
    return this.requests
      .post(LOGIN_URL, { username, password })
      .then(result => result.json());
  }
}
