import curry2 from '../_internal/_curry2'

export default curry2(function forEach(fn, list) {
  for (var i = 0; i < list.length; i++) {
    fn(list[i])
  }
  return list
})
