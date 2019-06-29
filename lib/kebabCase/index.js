import _words from '../_internal/_words'

export default function kebabCase(string) {
  return _words(string).reduce((acc, word) => {
    if (word !== '') {
      if (acc === '') return word.toLowerCase()
      return acc + '-' + word.toLowerCase()
    }
    return acc
  }, '')
}
