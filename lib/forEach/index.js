import curry2 from '../_internal/_curry2'

export default curry2(function forEach(fn, array) {
  for (var index = 0; index < array.length; index++) {
    fn(array[index])
  }
  return array
})
