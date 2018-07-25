const { times: { TIME_1K }, types: { TYPE_10K } } = require('../_internal/helpers/performance')

module.exports = function() {
  const length = TIME_1K
  let small = []
  let medium = []
  let big = []

  for (var i = 0; i < length[2]; i++) {
    if (i < length[0]) {
      small = [i, small]
    }

    if (i < length[1]) {
      medium = [i, medium]
    }

    big = [i, big]
  }

  return {
    type: TYPE_10K,
    argss: [
      [small],
      [medium],
      [big]
    ]
  }
}
