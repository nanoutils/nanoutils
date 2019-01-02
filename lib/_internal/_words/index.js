/**
 * Find words in a string
 * @param {string} string - string to find words
 */
export default function words(string) {
  var foundWords = string
    .replace(/[^a-zа-яё\-_ ]/gi, '')
    .replace(/([A-ZА-ЯЁ]+)/g, '_$1')
    .split(/[-|_| ]+/g)

  if (foundWords[0] === '') {
    return foundWords.slice(1)
  }
  return foundWords
}
