import curry2 from '../_internal/_curry2'

export default curry2((key, value) => {
  var r = {}
  r[key] = value
  return r
})
