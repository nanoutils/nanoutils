const { generateArrays, times: { TIME_1K }, types: { TYPE_PERCENT } } = require('../_internal/helpers/performance')

module.exports = function() {
  const lengths = Array(3).fill(TIME_1K[2])
  const [list1] = generateArrays(lengths, () => ({ a: 1 }))
  const [list2] = generateArrays(lengths, x => x < lengths[0] / 2 ? { a: 1 } : { a: 2 })
  const [list3] = generateArrays(lengths, () => ({ a: 3 }))
  const func = (a, b) => a.a === b.a

  return {
    type: TYPE_PERCENT,
    argss: [
      [func, list1, list3], // no common
      [func, list1, list2], // 50% of common
      [func, list1, list1] // 100% of common
    ]
  }
}
