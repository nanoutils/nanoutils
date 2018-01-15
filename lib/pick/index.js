import curry from '../curry'

export default curry(function pick(props, obj) {
  return props.reduce(function(nObj, prop) {
    nObj[prop] = obj[prop]
    return nObj
  }, {})
})
