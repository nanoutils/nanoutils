export default function evolve(callbacks, object) {
  return Object.keys(object).reduce(function(currentObject, key) {
    currentObject[key] = callbacks[key]
      ? typeof callbacks[key] === 'object'
        // TODO: remove recursive call
        ? evolve(callbacks[key], object[key])
        : callbacks[key](object[key])
      : object[key]
    return currentObject
  }, {})
}
