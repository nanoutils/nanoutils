export default function fromPairs(list) {
  var obj = {}
  var i = 0
  while (i < list.length) {
    obj[list[i][0]] = list[i][1]
    i++
  }
  return obj
}
