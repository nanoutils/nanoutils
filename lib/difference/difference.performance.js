const { generateArrays, times: { TIME_1K }, types: { TYPE_PERCENT } } = require('../_internal/helpers/performance')

module.exports = function() {
  const lengths = Array(3).fill(TIME_1K[2])
  const [list1] = generateArrays(lengths, () => 1)
  const [list2] = generateArrays(lengths, (x) => x % 2 === 0 ? 1 : 2)
  const [list3] = generateArrays(lengths, () => 3)

  return {
    type: TYPE_PERCENT,
    argss: [
      [list1, list3], // no common
      [list1, list2], // 50% common
      [list1, list1] // 100% ocmmon
    ]
  }
}
