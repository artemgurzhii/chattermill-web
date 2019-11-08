import DS from 'ember-data';
import { A } from '@ember/array';

const { Transform } = DS;

export default class ArrayTransform extends Transform {
  deserialize(serialized) {
    return A(Array.isArray(serialized) ? serialized : []);
  }

  serialize(deserialized) {
    return A(Array.isArray(deserialized) ? deserialized : []);
  }
}
