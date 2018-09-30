import type from '../../../cjs/type'

export function typeErrorWith(method, options) {
  var i = options.i
  var n = options.n
  var key = options.key || ('arg' + (i + 1))
  var value = options.value
  var types = options.types

  var params = Array(n).fill('*').map(function(v, j) {
    if (i === j) {
      return key
    }
    return v
  }).join(', ')

  var acceptingType
  if (types.length > 1) {
    acceptingType = types.slice(0, -1).join(', ') + ' and ' + types[types.length - 1]
  } else if (types.length === 1) {
    var vowels = ['a', 'e', 'i', 'o', 'y']
    var startsFromVowel = vowels.indexOf(types[0][0]) > -1
    acceptingType = (startsFromVowel ? 'an' : 'a') + ' ' + types[0]
  }

  return '[Nanoutils] ' + method + '(' + params + ') accepts ' + acceptingType + ', ' + type(value) + ' given'
}
