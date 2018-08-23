import equals from '../equals/equals'

export default function endsWith(suffix, list) {
  var isArrayOrString = function(value) {
    return Array.isArray(value) || typeof value === 'string'
  }
  if (isArrayOrString(suffix) && isArrayOrString(list)) {
    return equals(suffix, list.slice(-suffix.length))
  }
}
