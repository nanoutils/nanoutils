const { types: { TYPE_100K } } = require('../_internal/helpers/performance')

module.exports = function() {
  const isEven = x => x % 2 === 0
  const listEven = []
  const listOdd = []
  const listMixed = []
  const length = 2e5 // all arrays will have double reduced length

  for (let i = 0; i < length; i++) {
    if (isEven(i)) {
      listEven.push(i)
      if (i < length / 2) listMixed.push(i)
    } else {
      listOdd.push(i)
      if (i < length / 2) listMixed.unshift(i)
    }
  }

  const sets = [
    [isEven, listEven], // 0% match
    [isEven, listMixed], // 50% match
    [isEven, listOdd] // 100% match
  ]

  return {
    argss: sets,
    type: TYPE_100K
  }
}
