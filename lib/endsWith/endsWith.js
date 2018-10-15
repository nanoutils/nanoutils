import equals from '../equals/equals'

export default function endsWith(suffix, arrayOrString) {
  var areSameTypes = typeof suffix === typeof arrayOrString
  var isSuffixArrayOrString = Array.isArray(suffix) || typeof suffix === 'string'
  if (areSameTypes && isSuffixArrayOrString) {
    return equals(suffix, arrayOrString.slice(-suffix.length))
  }
}
