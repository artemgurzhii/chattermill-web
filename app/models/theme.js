import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default class ThemeModel extends Model {
  @attr('string') name;
}
