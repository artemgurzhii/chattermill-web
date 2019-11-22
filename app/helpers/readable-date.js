import { assert } from '@ember/debug';
import { helper } from '@ember/component/helper';

export default helper(([date]) => {
  assert('Date should be passed', date);

  return new Date(date).toDateString();
});
