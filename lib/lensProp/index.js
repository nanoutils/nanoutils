import lens from '../lens'

export default (prop) =>
  lens(
    (obj) => obj[prop],
    (val, obj) => {
      var newObj = {}
      for (var key in obj) newObj[key] = obj[key]
      newObj[prop] = val
      return newObj
    },
  )
