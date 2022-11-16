const {
  generators: { getSameLengthArrays },
  time: { TIME_1M },
  types: { TYPE_PERCENT },
} = require('../_internal/helpers/performance')

module.exports = function () {
  const isTrue = () => true
  const [start, half, end] = [0, TIME_1M / 2, TIME_1M - 1]
  const isStart = [(i) => i === start, isTrue]
  const isHalf = [(i) => i === half, isTrue]
  const isEnd = [(i) => i === end, isTrue]
  const [arr1, arr2, arr3] = getSameLengthArrays(TIME_1M, () => [
    isStart,
    isHalf,
    isEnd,
  ])

  return {
    type: TYPE_PERCENT,
    argss: [
      [arr1, start],
      [arr2, half],
      [arr3, end],
    ],
  }
}
