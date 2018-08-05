const { generators: { getArrays }, times: { TIMES_1K }, types: { TYPE_PERCENT } } = require('../_internal/helpers/performance')

module.exports = function() {
  const lengths = Array(3).fill(TIMES_1K[2])
  const [list1] = getArrays(lengths, () => 1)
  const [list2] = getArrays(lengths, x => x % 2 === 0 ? 1 : 2)
  const [list3] = getArrays(lengths, () => 3)

  return {
    type: TYPE_PERCENT,
    argss: [
      [list1, list3], // no common
      [list1, list2], // 50% common
      [list1, list1] // 100% ocmmon
    ]
  }
}
