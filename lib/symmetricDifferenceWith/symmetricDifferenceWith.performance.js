const {
  generators: { getSameLengthArrays },
  time: { TIME_1K },
  types: { TYPE_PERCENT }
} = require('../_internal/helpers/performance')

module.exports = function() {
  const fValues = x => [{ a: 1 }, x < TIME_1K / 2 ? { a: 1 } : { a: 2 }, { a: 3 }]
  const [arr1, arr2, arr3] = getSameLengthArrays(TIME_1K, fValues)
  const getA = (a, b) => a.a === b.a

  return {
    type: TYPE_PERCENT,
    argss: [
      [getA, arr1, arr3], // no common
      [getA, arr1, arr2], // 50% of common
      [getA, arr1, arr1] // 100% of common
    ]
  }
}
