import _curry3 from '../_internal/_curry3'

export default _curry3(function insert(idx, val, list) {
  var a = [].concat(list)
  a.splice(idx, 0, val)
  return a
})
