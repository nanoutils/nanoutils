export default function camelCase(string) {
  return string.split(/-|_| /g).reduce(function(acc, word) {
    if (word !== '') {
      if (acc === '') return word.toLowerCase()
      return acc + word[0].toUpperCase() + word.slice(1).toLowerCase()
    }
    return acc
  }, '')
}
