import curry2 from '../_internal/_curry2'

export default curry2(function concat(first, second) {
  return Array.isArray(first) && Array.isArray(second) || typeof first === 'string' && typeof second === 'string'
    ? first.concat(second)
    : null
})
