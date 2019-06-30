import lens from '../lens'

export default function lensProp(prop) {
  return lens(
    obj => obj[prop],
    (val, obj) => {
      var newObj = {}
      for (var key in obj) newObj[key] = obj[key]
      newObj[prop] = val
      return newObj
    }
  )
}
