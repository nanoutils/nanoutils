export default function snakeCase(string) {
  return string
    .replace(/([A-Z]+)/g, '_$1')
    .split(/[-|_| ]+/g)
    .reduce(function(acc, word) {
      if (word !== '') {
        var firstPart = acc === ''
          ? ''
          : acc + '_'
        return firstPart + word.toLowerCase()
      }
      return acc
    }, '')
}
