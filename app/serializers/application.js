import DS from 'ember-data';
import { pluralize } from 'ember-inflector';
import { underscore } from '@ember/string';

export default class ApplicationSerializer extends DS.RESTSerializer {
  normalizeResponse(_store, primaryModelClass, payload) {
    const key = pluralize(primaryModelClass.modelName);

    payload[key] = payload.data;

    delete payload.data;

    return super.normalizeResponse(...arguments);
  }

  keyForAttribute(attr) {
    return underscore(attr);
  }
}
