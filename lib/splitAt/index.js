import _curry2 from '../_internal/_curry2'

export default _curry2(function splitAt(pos, list) {
  return [list.slice(0, pos), list.slice(pos)]
})
