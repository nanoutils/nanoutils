import _curry3 from '../_internal/_curry3'

export default _curry3(function insertAll(index, values, array) {
  if (index > array.length) {
    index = array.length
  }
  return array.slice(0, index).concat(values, array.slice(index))
})
