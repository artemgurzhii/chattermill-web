import Service, { inject as service } from '@ember/service';
import fetch from 'fetch';

export default class ActionsAuthService extends Service {
  @service requests;

  async login({ username, password }) {
    const data = `username=${username}&password=${password}`;

    return this.requests.post('https://chattermill-challenge.com/login', data)
      .then(result => result.json())
      .then(result => {debugger})
  }
}
