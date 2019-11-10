import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default class ReviewModel extends Model {
  @attr('string') comment;
  @attr('date') createdAt;

  @attr('theme') themes;
}
