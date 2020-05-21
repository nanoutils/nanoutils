export default (fn, list) => {
  var i = 0
  while (i < list.length) {
    if (fn(list[i])) return i
    i++
  }
  return -1
}
