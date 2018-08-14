import curry2 from '../_internal/_curry2'

export default curry2(function prop(p, obj) {
  return obj[p]
})
