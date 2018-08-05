const { generators: { getArrays }, times: { TIMES_1K }, types: { TYPE_PERCENT } } = require('../_internal/helpers/performance')

module.exports = function() {
  const lengths = Array(3).fill(TIMES_1K[2])
  const [list1] = getArrays(lengths, () => ({ a: 1 }))
  const [list2] = getArrays(lengths, x => x < lengths[0] / 2 ? { a: 1 } : { a: 2 })
  const [list3] = getArrays(lengths, () => ({ a: 3 }))
  const getA = (a, b) => a.a === b.a

  return {
    type: TYPE_PERCENT,
    argss: [
      [getA, list1, list3], // no common
      [getA, list1, list2], // 50% of common
      [getA, list1, list1] // 100% of common
    ]
  }
}
