/**
 * Find words in a string
 * @param {string} string - string to find words
 */
export default function words(string) {
  return string
    .replace(/([A-Z]+)/g, '_$1')
    .split(/[-|_| ]+/g)
    .filter(function(word) {
      return word !== ''
    })
}
