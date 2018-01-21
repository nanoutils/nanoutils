import curryN from '../curryN'

export default curryN(2, function omit(props, obj) {
  return Object.keys(obj)
    .filter(function(k) {
      return props.indexOf(k) === -1
    })
    .reduce(function(nObj, prop) {
      nObj[prop] = obj[prop]
      return nObj
    }, {})
})
