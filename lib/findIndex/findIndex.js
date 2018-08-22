export default function findIndex(fn, list) {
  if (list.findIndex) {
    return list.findIndex(fn)
  }
  var i = 0
  while (i < list.length) {
    if (fn(list[i])) return i
    i++
  }
  return -1
}
