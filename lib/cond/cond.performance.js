const { generators: { getArrays }, times: { TIMES_1M } } = require('../_internal/helpers/performance')

module.exports = function() {
  const length = TIMES_1M[2]
  const lengths = [length, length, length]

  const isTrue = () => true
  const start = () => [i => i === 0, isTrue]
  const middle = () => [i => i === length / 2, isTrue]
  const end = () => [i => i === length - 1, isTrue]

  const [first] = getArrays(lengths, start)
  const [second] = getArrays(lengths, middle)
  const [third] = getArrays(lengths, end)

  return {
    type: 'percent',
    argss: [
      [first, 0],
      [second, length / 2],
      [third, length - 1]
    ]
  }
}
