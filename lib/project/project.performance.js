module.exports = function() {
  var obj = {}
  var list1 = []
  var list2 = []
  var list3 = []
  var length = 10000

  for (var i = 0; i < length; i++) {
    obj[i] = 'a'
    if (i < length / 100) list1.push(i)
    if (i < length / 10) list2.push(i)
    list3.push(i)
  }

  var sets = [
    [list1, obj],
    [list2, obj],
    [list3, obj]
  ]

  return {
    argss: sets,
    type: 'object_size_1e5'
  }
}
