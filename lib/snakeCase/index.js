import _words from '../_internal/_words'

export default (string) =>
  _words(string)
    .filter((word) => word !== '')
    .map((word) => word.toLowerCase())
    .join('_')
