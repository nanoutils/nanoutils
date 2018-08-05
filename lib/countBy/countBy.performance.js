const { generators: { getArrays }, times: { TIMES_100K }, types: { TYPE_100K } } = require('../_internal/helpers/performance')

module.exports = function() {
  const [small, medium, big] = getArrays(TIMES_100K)
  const remainder = length => x => x % (length / 2)

  return {
    type: TYPE_100K,
    argss: [
      [remainder(small.length), small],
      [remainder(medium.length), medium],
      [remainder(big.length), big]
    ]
  }
}
