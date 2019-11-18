import Service, { inject as service } from '@ember/service';

export default class RepositoryBaseService extends Service {
  @service store;

  constructor() {
    super(...arguments);

    if (this.recordName === null) this.debug('Specify record name on which to perform operations');

    if (this.implementMethods === null) this.debug('Specify methods that service should implement');
  }

  query() {
    return this.store.query(...arguments);
  }
}
