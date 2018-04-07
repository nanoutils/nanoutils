import mean from '../mean'

export default function median(list) {
  var width = 2 - list.length % 2
  var idx = (list.length - width) / 2
  return !list.length
    ? NaN
    : mean(
      []
        .concat(list)
        .sort(function(a, b) {
          return a < b ? -1 : a > b ? 1 : 0
        })
        .slice(idx, idx + width)
    )
}
