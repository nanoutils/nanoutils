import curry2 from '../_internal/_curry2'

export default curry2((props, obj) => {
  var newObj = {}
  for (var key in obj) {
    if (obj.hasOwnProperty(key) && props.indexOf(key) === -1) {
      newObj[key] = obj[key]
    }
  }
  return newObj
})
