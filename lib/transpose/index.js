export default function transpose(list) {
  var i = 0
  var max = 0
  while (i < list.length) {
    if (max < list[i].length) {
      max = list[i].length
    }
    i++
  }
  var res = Array(max)
  var j = 0
  while (j < max) {
    var arr = []
    for (i = 0; i < list.length; i++) {
      if (list[i][j] !== undefined) {
        arr.push(list[i][j])
      }
    }
    res[j++] = arr
  }
  return res
}
