import Controller from '@ember/controller';
import { action, setProperties } from '@ember/object';
import { tracked } from '@glimmer/tracking';

const POSSIBLE_FILTER_KEYS = {
  theme_id: {
    type: 'number',
    value: '',
  },
};

export default class AuthenticatedFeedController extends Controller {
  queryParams = ['theme_id', 'limit', 'offset'];

  theme_id = undefined; // eslint-disable-line
  limit = 20;
  offset = 0;

  filterKeys = POSSIBLE_FILTER_KEYS;

  @tracked filters = [];

  @action
  addFilter() {
    this.filters.pushObject({});
  }

  @action
  filter() {
    setProperties(this, {

    });
  }
}
