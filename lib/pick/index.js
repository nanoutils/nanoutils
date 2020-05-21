import curry2 from '../_internal/_curry2'

export default curry2((props, obj) =>
  props.reduce((nObj, prop) => {
    if (prop in obj) {
      nObj[prop] = obj[prop]
    }
    return nObj
  }, {})
)
