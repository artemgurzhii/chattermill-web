import RESTAdapter from '@ember-data/adapter/rest';
import config from 'ember-get-config';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import { pluralize } from 'ember-inflector';

const {
  CW: {
    host,
    namespace,
  },
} = config;

export default class ApplicationAdapter extends RESTAdapter.extend(DataAdapterMixin) {
  @service session;

  host = host;
  namespace = namespace;

  get headers() {
    const headers = {};
    const token = get(this, 'session.data.authenticated.token');

    if (token) headers.Authorization = `Bearer ${token}`;

    return headers;
  }

  pathForType(modelName) {
    return pluralize(modelName);
  }
}
