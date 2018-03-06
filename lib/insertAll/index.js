import _curry3 from '../_internal/_curry3'

export default _curry3(function insertAll(idx, vals, list) {
  idx = Math.min(idx, list.length)
  return [].concat(list.slice(0, idx), vals, list.slice(idx))
})
