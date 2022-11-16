const {
  generators: { getSameLengthArrays },
  time: { TIME_1K },
  types: { TYPE_PERCENT },
} = require('../_internal/helpers/performance')

module.exports = function () {
  const fValues = (x) => ['a', x < TIME_1K / 2 ? 'a' : 'b', 'c']
  const [arr1, arr2, arr3] = getSameLengthArrays(TIME_1K, fValues)

  return {
    type: TYPE_PERCENT,
    argss: [
      [arr1, arr3], // no common
      [arr1, arr2], // 50% of common
      [arr1, arr1], // 100% of common
    ],
  }
}
