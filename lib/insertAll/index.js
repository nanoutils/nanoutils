import _curry3 from '../_internal/_curry3'

export default _curry3((idx, vals, list) => {
  if (idx > list.length) {
    idx = list.length
  }
  return list.slice(0, idx).concat(vals, list.slice(idx))
})
