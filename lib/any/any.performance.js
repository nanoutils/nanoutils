const { generateArrays, times: { TIME_100K } } = require('../_internal/helpers/performance')

module.exports = function() {
  const length = TIME_100K[2]
  const [arr] = generateArrays([length, length, length], x => x)
  const func = index => i => i === index

  return {
    type: 'start_half_end',
    argss: [
      [func(0), arr], // first element
      [func(length / 2), arr], // middle element
      [func(length - 1), arr] // last element
    ]
  }
}
