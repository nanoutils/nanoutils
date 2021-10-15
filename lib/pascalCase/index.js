import _words from '../_internal/_words'

export default (value) =>
  _words(value)
    .filter(word => word !== '')
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join('')
