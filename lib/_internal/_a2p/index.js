export default (a) =>
  Array.isArray(a)
    ? a.join('.')
    : typeof a === 'string' || typeof a === 'number'
    ? '' + a
    : ''
