import _curry2 from '../_internal/_curry2'

export default _curry2(function identical(a, b) {
  if (a + '' === 'NaN') return a + '' === b + ''
  if (a === 0) return 1 / a === 1 / b
  return a === b
})
