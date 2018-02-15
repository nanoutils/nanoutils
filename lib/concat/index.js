import curry2 from '../_internal/_curry2'

export default curry2(function concat(a, b) {
  return Array.isArray(a) && Array.isArray(b) || typeof a === 'string' && typeof b === 'string'
    ? a.concat(b)
    : null
})
