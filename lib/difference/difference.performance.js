const {
  generators: { getSameLengthArrays },
  time: { TIME_1K },
  types: { TYPE_PERCENT },
} = require('../_internal/helpers/performance')

module.exports = function () {
  const gens = [() => 1, (x) => (x % 2 === 0 ? 1 : 2), () => 3]
  const [arr1, arr2, arr3] = getSameLengthArrays(TIME_1K, (x) =>
    gens.map((gen) => gen(x)),
  )

  return {
    type: TYPE_PERCENT,
    argss: [
      [arr1, arr3], // no common
      [arr1, arr2], // 50% common
      [arr1, arr1], // 100% ocmmon
    ],
  }
}
