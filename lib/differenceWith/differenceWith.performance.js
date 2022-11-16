const {
  generators: { getSameLengthArrays },
  time: { TIME_10K },
  types: { TYPE_PERCENT },
} = require('../_internal/helpers/performance')

module.exports = function () {
  const gens = [
    () => ({ a: 1 }),
    (x) => (x % 2 === 0 ? { a: 1 } : { a: 2 }),
    () => ({ a: 3 }),
  ]
  const [arr1, arr2, arr3] = getSameLengthArrays(TIME_10K, (x) =>
    gens.map((gen) => gen(x)),
  )
  const isEqual = (a, b) => a.a === b.a

  return {
    type: TYPE_PERCENT,
    argss: [
      [isEqual, arr1, arr3], // no common
      [isEqual, arr1, arr2], // 50% common
      [isEqual, arr1, arr1], // 100% ocmmon
    ],
  }
}
