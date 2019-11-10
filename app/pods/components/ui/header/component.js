import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class UIHeaderComponent extends Component {
  @service session;

  @action
  logout() {
    return this.session.invalidate();
  }
}
