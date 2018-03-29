import _curry3 from '../_internal/_curry3'

export default _curry3(function update(idx, value, list) {
  var result = list.slice()
  result[idx] = value
  return result
})
