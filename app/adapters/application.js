import DS from 'ember-data';
import config from 'ember-get-config';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';

const {
  CW: {
    host,
    namespace,
  },
} = config;


export default class ApplicationAdapter extends DS.JSONAPIAdapter {
  @service session;

  host = host;
  namespace = namespace;

  authorize(xhr) {
    const accessToken = get(this, 'session.data.authenticated.access_token');

    xhr.setRequestHeader('Authorization', `Bearer ${accessToken}`);
  }
}