import Controller from '@ember/controller';
import { action, setProperties } from '@ember/object';

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

  filters = [];

  @action
  addFilter() {
    this.filters.push({});
  }

  @action
  filter() {
    setProperties(this, {

    });
  }
}
