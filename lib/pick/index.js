import curryN from '../curryN'

export default curryN(2, function pick(props, obj) {
  return props.reduce(function(nObj, prop) {
    nObj[prop] = obj[prop]
    return nObj
  }, {})
})
