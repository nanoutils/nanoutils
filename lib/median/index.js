import mean from '../mean'

const median = (list) => {
  var width = 2 - list.length % 2
  var idx = (list.length - width) / 2
  return !list.length
    ? NaN
    : mean(
      list.slice()
        .sort((a, b) => a < b ? -1 : a > b ? 1 : 0)
        .slice(idx, idx + width)
    )
}

export default median
