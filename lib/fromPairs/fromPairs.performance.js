module.exports = function getPairsList() {
  var list1 = []
  var list2 = []
  var list3 = []
  var length = 1000000

  for (var i = 0; i < length; i++) {
    if (i < 1000) list1.push([i, 'a'])
    if (i < 100000) list2.push([i, 'b'])
    list3.push([i, 'c'])
  }

  const sets = [
    [list1],
    [list2],
    [list3]
  ]

  return {
    argss: sets,
    type: 'array_size'
  }
}
