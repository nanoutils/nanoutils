import _curry2 from '../_internal/_curry2'

export default _curry2(function endsWith(suffix, list) {
  return suffix === list[list.length - 1]
})
