import { compact } from 'chattermill-web/utils/object';
import Route from '@ember/routing/route';
import { set } from '@ember/object';

export default class AuthenticatedFeedRoute extends Route {
  queryParams = {
    theme_id: {
      refreshModel: true,
    },

    limit: {
      refreshModel: true,
    },

    offset: {
      refreshModel: true,
    },
  };

  model(params = {}) {
    return this.store.query('review', compact(params));
  }

  setupController(controller, model) {
    super.setupController(...arguments);

    set(controller, 'reviews', model);
  }
}
