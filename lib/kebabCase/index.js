import _words from '../_internal/_words'

export default (string) =>
  _words(string).reduce((acc, word) => {
    if (word !== '') {
      if (acc === '') return word.toLowerCase()
      return acc + '-' + word.toLowerCase()
    }
    return acc
  }, '')
