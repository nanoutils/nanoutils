import lens from '../lens'

export default function lensPath(path) {
  return lens(
    function getter(object) {
      return path.reduce(function(currentObject, key) {
        return currentObject != null ? currentObject[key] : undefined
      }, object)
    },
    function setter(value, object) {
      if (typeof object !== 'object') {
        return object
      }
      var lastObject = path.slice(0, -1).reduce(function(currentObject, key, index) {
        if (typeof currentObject[key] !== 'object') {
          currentObject[key] = Number.isNaN(parseInt(path[index + 1])) ? {} : []
        }
        return currentObject[key]
      }, object)
      lastObject[path.slice(-1)[0]] = value
      return object
    }
  )
}
