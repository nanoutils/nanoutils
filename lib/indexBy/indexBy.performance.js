const { generators: { getArrays }, times: { TIMES_1M }, types: { TYPE_1M } } = require('../_internal/helpers/performance')

module.exports = function() {
  const generateFunc = (x) => x % 2 === 0 ? { id: 'a', title: x } : { id: 'b', title: x }
  const [small, medium, big] = getArrays(TIMES_1M, generateFunc)
  const getId = obj => obj.id

  return {
    type: TYPE_1M,
    argss: [
      [getId, small],
      [getId, medium],
      [getId, big]
    ]
  }
}
