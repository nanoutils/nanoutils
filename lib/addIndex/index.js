import curry3 from '../_internal/_curry3'

export default curry3((f, g, array) => {
  var index = 0
  return f((value) => g(value, index++), array)
})
