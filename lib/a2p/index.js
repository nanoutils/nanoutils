module.exports = function a2p(a) {
  return Array.isArray(a)
    ? a.join('.')
    : typeof a === 'string' || typeof a === 'number' ? '' + a : ''
}
