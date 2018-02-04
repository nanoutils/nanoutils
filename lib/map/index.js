import curry2 from '../_internal/_curry2'

export default curry2(function map(f, element) {
  return Object.keys(element).reduce(function (obj, key) {
    obj[key] = f(element[key])
    return obj
  }, Array.isArray(element) ? [] : {})
})
