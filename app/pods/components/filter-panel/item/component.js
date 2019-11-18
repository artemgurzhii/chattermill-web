import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';

export default class FilterPanelItemComponent extends Component {
  /**
   * ID for input field and the corresponding label's "for" attribute
   *
   * @property formElementId
   * @type string
   * @private
   * */
  get formElementId() {
    return guidFor(this);
  }
}
