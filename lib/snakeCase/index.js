import _words from '../_internal/_words'

export default function snakeCase(string) {
  return _words(string)
    .filter(function(word) {
      return word !== ''
    })
    .map(function(word) {
      return word.toLowerCase()
    })
    .join('_')
}
