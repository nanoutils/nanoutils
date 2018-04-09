import lens from '../lens'

export default function lensProp(prop) {
  return lens(
    function(obj) {
      return obj[prop]
    },
    function(val, obj) {
      var newObj = {}
      for (var key in obj) newObj[key] = obj[key]
      newObj[prop] = val
      return newObj
    }
  )
}
