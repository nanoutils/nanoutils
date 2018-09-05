const {
  generators: { getSameLengthArrays },
  time: { TIME_1K },
  types: { TYPE_PERCENT }
} = require('../_internal/helpers/performance')

module.exports = function() {
  const [big1, big2, big3] = getSameLengthArrays(TIME_1K, i => ['a', i < TIME_1K / 2 ? 'a' : 'aa', 'aaa'])
  const comparison = (a, b) => a === b

  return {
    type: TYPE_PERCENT,
    argss: [
      [comparison, big1, big3], // no common
      [comparison, big1, big2], // 50% of common
      [comparison, big1, big1] // 100% of common
    ]
  }
}
