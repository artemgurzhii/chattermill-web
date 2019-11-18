import { isBlank, isNone } from '@ember/utils';

export function objectToQuery(obj) {
  return Object.keys(obj).reduce((str, key, i) => {
    const delimiter = (i === 0) ? '' : '&';
    key = encodeURIComponent(key);
    const val = encodeURIComponent(obj[key]);

    return [str, delimiter, key, '=', val].join('');
  }, '');
}

export function compact(obj) {
  const newObj = {};

  Object.keys(obj).forEach(key => {
    const value = obj[key];

    if (!isNone(value) && !isBlank(value)) {
      newObj[key] = obj[key];
    }
  });

  return newObj;
}
