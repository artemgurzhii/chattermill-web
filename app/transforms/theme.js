import DS from 'ember-data';

const { Transform } = DS;

export default class ThemeTransform extends Transform {
  deserialize(serialized) {
    return serialized.map(item => ({
      themeId: item.theme_id,
      sentiment: item.sentiment,
    }));
  }

  serialize(deserialized) {
    return deserialized.map(item => ({
      theme_id: item.themeId,
      sentiment: item.sentiment,
    }));
  }
}
