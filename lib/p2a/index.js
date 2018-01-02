module.exports = function toPath(p) {
  return Array.isArray(p)
    ? p
    : typeof p === 'string'
      ? p.split('.')
      : typeof p === 'number' ? ['' + p] : []
}
