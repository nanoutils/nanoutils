import curry2 from '../_internal/_curry2'

export default curry2(function anyPass(cbs, value) {
  var i = 0
  var length = cbs.length
  while (i < length && !cbs[i](value)) {
    i += 1
  }
  return i < length
})
