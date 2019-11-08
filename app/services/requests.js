import { objectToQuery } from 'chattermill-web/utils';
import Service from '@ember/service';
import fetch from 'fetch'; // eslint-disable-line

export default class RequestsService extends Service {
  post(url, data) {
    return this.fetch(url, 'POST', data);
  }

  fetch(url, method, data) {
    try {
      const params = {
        method,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      };

      if (data) params.body = objectToQuery(data);

      return fetch(url, params);
    } catch (error) {
      const message = error.message ? error.message : error;

      console.error(`SERVICE(Requests): ${message}`); // eslint-disable-line
    }
  }
}
