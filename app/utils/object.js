export function objectToQuery(obj) {
  return Object.keys(obj).reduce((str, key, i) => {
    const delimiter = (i === 0) ? '' : '&';
    key = encodeURIComponent(key);
    const val = encodeURIComponent(obj[key]);

    return [str, delimiter, key, '=', val].join('');
  }, '');
}
