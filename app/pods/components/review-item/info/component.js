import { SENTIMENT_MAPPER } from 'chattermill-web/utils/constants';
import { inject as service } from '@ember/service';
import { isPresent } from '@ember/utils';
import Component from '@glimmer/component';

const CACHE = {};

export default class ReviewItemInfoComponent extends Component {
  @service store;

  get emoji() {
    const { sentiment } = this.args.info;

    if (isPresent(sentiment)) return SENTIMENT_MAPPER[sentiment];

    return SENTIMENT_MAPPER.default;
  }

  get theme() {
    const { themeId: id } = this.args.info;

    if (CACHE[id]) return CACHE[id];

    const theme = this.store.peekRecord('theme', id);

    CACHE[id] = theme;

    return theme;
  }
}
