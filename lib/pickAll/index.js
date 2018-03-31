import _curry2 from '../_internal/_curry2'

export default _curry2(function pickAll(props, obj) {
  return props.reduce(function(nObj, prop) {
    nObj[prop] = obj[prop]
    return nObj
  }, {})
})
