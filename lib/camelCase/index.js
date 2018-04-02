import _words from '../_internal/_words'

export default function camelCase(string) {
  return _words(string).reduce(function(acc, word) {
    if (word !== '') {
      if (acc === '') return word.toLowerCase()
      return acc + word[0].toUpperCase() + word.slice(1).toLowerCase()
    }
    return acc
  }, '')
}
