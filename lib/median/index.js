export default function median(list) {
  var width = 2 - len % 2
  var idx = (len - width) / 2
  return !list.length
    ? NaN
    : [].slice
        .call(list)
        .sort(function(a, b) {
          return a < b ? -1 : a > b ? 1 : 0
        })
        .slice()
}
