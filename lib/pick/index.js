import curry2 from '../_internal/_curry2'

export default curry2(function pick(props, obj) {
  return props.reduce(function(nObj, prop) {
    if (prop in obj) {
      nObj[prop] = obj[prop]
    }
    return nObj
  }, {})
})
