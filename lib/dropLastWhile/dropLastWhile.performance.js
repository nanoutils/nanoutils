const { generateArrays, times: { TIME_1M }, types: { TYPE_1M } } = require('../_internal/helpers/performance')

module.exports = function() {
  const sLength = [TIME_1M[0], TIME_1M[0], TIME_1M[0]]
  const mLength = [TIME_1M[1], TIME_1M[1], TIME_1M[1]]
  const lLength = [TIME_1M[2], TIME_1M[2], TIME_1M[2]]

  const genFunc = length => x => x < length / 2 ? 1 : 2
  const cb = (x) => x % 2 === 0

  const [small] = generateArrays(sLength, genFunc(sLength[0]))
  const [medium] = generateArrays(mLength, genFunc(mLength[0]))
  const [big] = generateArrays(lLength, genFunc(lLength[0]))

  return {
    type: TYPE_1M,
    argss: [
      [cb, small],
      [cb, medium],
      [cb, big]
    ]
  }
}
