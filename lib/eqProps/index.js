import _curry3 from '../_internal/_curry3'

export default _curry3(function eqProps(prop, obj1, obj2) {
  return obj1[prop] === obj2[prop]
})
