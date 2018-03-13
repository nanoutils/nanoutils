module.exports = function getObject() {
  const length = 100000
  const list1 = []
  const list2 = []
  const list3 = []

  const func = (x) => x % 2 === 0 ? 'even' : 'odd'

  for (var i = 0; i < length; i++) {
    if (i < 1000) list1.push(i)
    if (i < 10000) list2.push(i)
    list3.push(i)
  }

  const sets = [
    [func, list1],
    [func, list2],
    [func, list3]
  ]

  return {
    argss: sets,
    type: 'array_size_1e5'
  }
}
