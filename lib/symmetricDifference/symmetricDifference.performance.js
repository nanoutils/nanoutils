const { generators: { getArrays }, times: { TIMES_1K }, types: { TYPE_PERCENT } } = require('../_internal/helpers/performance')

module.exports = function() {
  const lengths = Array(3).fill(TIMES_1K[2])
  const [list1] = getArrays(lengths, () => 'a')
  const [list2] = getArrays(lengths, x => x < lengths[0] / 2 ? 'a' : 'b')
  const [list3] = getArrays(lengths, () => 'c')

  return {
    type: TYPE_PERCENT,
    argss: [
      [list1, list3], // no common
      [list1, list2], // 50% of common
      [list1, list1] // 100% of common
    ]
  }
}
