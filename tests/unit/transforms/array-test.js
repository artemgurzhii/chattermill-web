import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

const DATA_NONE = null;
const DATA_EMPTY = [];
const DATA_PRESENT = ['lorem', 'ipsum'];

let transform;

module('transform:array', 'Unit | Transform | array', hooks => {
  setupTest(hooks);

  hooks.beforeEach(function () {
    transform = this.owner.lookup('transform:array');
  });

  test('it exists', assert => {
    assert.ok(transform);
  });

  module('#deserialize', () => {
    test('returns empty array when nothing passed', assert => {
      const result = transform.deserialize(DATA_NONE);

      assert.deepEqual(result, [], 'Empty array is returned');
    });

    test('returns empty array when empty array is passed', assert => {
      const result = transform.deserialize(DATA_EMPTY);

      assert.deepEqual(result, [], 'Array itself is returned');
    });

    test('returns array itslef when array with data is passed', assert => {
      const result = transform.deserialize(DATA_PRESENT);

      assert.deepEqual(result, DATA_PRESENT, 'Array with original data is returned');
    });
  });

  module('#serialize', () => {
    test('returns empty array when nothing passed', assert => {
      const result = transform.serialize(DATA_NONE);

      assert.deepEqual(result, [], 'Empty array is returned');
    });

    test('returns empty array when empty array is passed', assert => {
      const result = transform.serialize(DATA_EMPTY);

      assert.deepEqual(result, [], 'Array itself is returned');
    });

    test('returns array itslef when array with data is passed', assert => {
      const result = transform.serialize(DATA_PRESENT);

      assert.deepEqual(result, DATA_PRESENT, 'Array with original data is returned');
    });
  });
});
