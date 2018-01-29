import curryN from '../curryN';

export default curryN(2, function map(f, element) {
  return Object.keys(element).reduce(function (obj, key) {
    obj[key] = f(element[key])
    return obj
  }, Array.isArray(element) ? [] : {})
})
