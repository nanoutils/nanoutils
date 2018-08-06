const { generators: { getArrays }, times: { TIMES_10K }, types: { TYPE_10K } } = require('../_internal/helpers/performance')

module.exports = function() {
  const generateValue = (x) => {
    return x % 2 === 0
      ? { a: undefined }
      : x % 3 === 0
        ? null
        : x
  }
  const [small, medium, big] = getArrays(TIMES_10K, generateValue)

  return {
    type: TYPE_10K,
    argss: [small, medium, big]
  }
}
