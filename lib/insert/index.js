import curry3 from '../_internal/_curry3'

export default curry3(function insert(index, value, array) {
  var shallowCopy = array.slice()
  shallowCopy.splice(index, 0, value)
  return shallowCopy
})
