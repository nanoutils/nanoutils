const { generateArrays, times: { TIME_1M } } = require('../_internal/helpers/performance')

module.exports = function() {
  const length = TIME_1M[2]
  const lengths = [length, length, length]

  const returnFunc = () => true
  const start = () => [i => i === 0, returnFunc]
  const middle = () => [i => i === length / 2, returnFunc]
  const end = () => [i => i === length - 1, returnFunc]

  const [first] = generateArrays(lengths, start)
  const [second] = generateArrays(lengths, middle)
  const [third] = generateArrays(lengths, end)

  return {
    type: 'percent',
    argss: [
      [first, 0],
      [second, length / 2],
      [third, length - 1]
    ]
  }
}
