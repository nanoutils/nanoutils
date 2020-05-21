import curry2 from '../_internal/_curry2'

export default curry2((cb, data) => {
  var i = 0
  var length = data.length
  while (i < length && !cb(data[i])) {
    i += 1
  }
  return i < length
})
