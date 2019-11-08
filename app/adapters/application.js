import DS from 'ember-data';
import config from 'ember-get-config';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

const {
  CW: {
    host,
    namespace,
  },
} = config;


export default class ApplicationAdapter extends DS.JSONAPIAdapter.extend(DataAdapterMixin) {
  @service session;

  host = host;
  namespace = namespace;

  authorize(xhr) {
    const accessToken = get(this, 'session.data.authenticated.access_token');

    xhr.setRequestHeader('Authorization', `Bearer ${accessToken}`);
  }
}
