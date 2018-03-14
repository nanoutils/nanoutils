import _curry2 from '../_internal/_curry2'

export default _curry2(function hasIn(prop, obj) {
  return prop in obj
})
