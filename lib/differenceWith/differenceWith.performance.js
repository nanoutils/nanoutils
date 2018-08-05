const { generators: { getArrays }, times: { TIMES_10K }, types: { TYPE_PERCENT } } = require('../_internal/helpers/performance')

module.exports = function() {
  const lengths = Array(3).fill(TIMES_10K[2])
  const [list1] = getArrays(lengths, () => ({ a: 1 }))
  const [list2] = getArrays(lengths, x => (x % 2 === 0 ? { a: 1 } : { a: 2 }))
  const [list3] = getArrays(lengths, () => ({ a: 3 }))
  const isEqual = (a, b) => a.a === b.a

  return {
    type: TYPE_PERCENT,
    argss: [
      [isEqual, list1, list3], // no common
      [isEqual, list1, list2], // 50% common
      [isEqual, list1, list1] // 100% ocmmon
    ]
  }
}
