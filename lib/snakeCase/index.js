import _words from '../_internal/_words'

export default function snakeCase(string) {
  return _words(string)
    .filter(word => word !== '')
    .map(word => word.toLowerCase())
    .join('_')
}
