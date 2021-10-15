export default (p) =>
  Array.isArray(p)
    ? p
    : typeof p === 'string'
    ? p.split('.')
    : typeof p === 'number'
    ? ['' + p]
    : []
