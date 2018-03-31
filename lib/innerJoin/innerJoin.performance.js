module.exports = function() {
  var func = (rec, x) => rec === x
  var length = 1000000
  var list1 = []
  var checkList1 = []
  var list2 = []
  var checkList2 = []
  var list3 = []
  var checkList3 = []

  for (var i = 0; i < length; i++) {
    if (i < 10000) {
      list1.push(i)
      if (i % 2 === 0) checkList1.push()
    }
    if (i < 100000) {
      list2.push(i)
      if (i % 2 === 0) checkList2.push()
    }
    list3.push(i)
    if (i % 2 === 0) checkList3.push()
  }

  var sets = [
    [func, list1, checkList1],
    [func, list2, checkList2],
    [func, list3, checkList3]
  ]

  return {
    argss: sets,
    type: '1e4_1e5_1e6'
  }
}
