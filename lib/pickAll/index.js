import curry2 from '../_internal/_curry2'

export default curry2(function pickAll(props, obj) {
  return props.reduce((nObj, prop) => {
    nObj[prop] = obj[prop]
    return nObj
  }, {})
})
