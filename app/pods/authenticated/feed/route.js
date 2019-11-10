import Route from '@ember/routing/route';

export default class AuthenticatedFeedRoute extends Route {
  model() {
    return this.store.findAll('review');
  }

  setupController(controller, model) {
    super.setupController(...arguments);

    controller.reviews = model;
  }
}
