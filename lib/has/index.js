import _curry2 from '../_internal/_curry2'

export default _curry2(function has(prop, obj) {
  return obj.hasOwnProperty(prop)
})
