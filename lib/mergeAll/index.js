export default function mergeAll(list) {
  var result = {}
  for (var i = 0; i < list.length; i++) {
    for (var key in list[i]) result[key] = list[i][key]
  }
  return result
}
