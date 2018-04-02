const { generateArrays, TIMES_1e4_1e5_1e6 } = require('../_internal/helpers/performance')

module.exports = function getData() {
  const fValue = i => i % 2 === 0 ? 'a' : 'b'
  const [big1, big2, big3] = generateArrays(TIMES_1e4_1e5_1e6, fValue)
  const isA = ch => ch === 'a'

  return {
    type: '1e4_1e5_1e6',
    argss: [
      [ isA, big1 ],
      [ isA, big2 ],
      [ isA, big3 ]
    ]
  }
}
