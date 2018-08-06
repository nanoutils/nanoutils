const { generators: { getArrays }, times: { TIMES_1M }, types: { TYPE_1M } } = require('../_internal/helpers/performance')

module.exports = function getData() {
  const fValue = i => i % 2 === 0 ? 'a' : 'b'
  const [big1, big2, big3] = getArrays(TIMES_1M, fValue)
  const isA = ch => ch === 'a'

  return {
    type: TYPE_1M,
    argss: [
      [ isA, big1 ],
      [ isA, big2 ],
      [ isA, big3 ]
    ]
  }
}
