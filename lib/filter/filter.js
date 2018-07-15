function filterArr(cb, arr) {
  var res = []
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i])) res.push(arr[i])
  }
  return res
}

function filterObj(cb, obj) {
  var res = {}
  var keys = Object.keys(obj)
  for (var i = 0; i < keys.length; i++) {
    if (cb(obj[keys[i]])) res[keys[i]] = obj[keys[i]]
  }
  return res
}

export default function filter(cb, obj) {
  return Array.isArray(obj)
    ? filterArr(cb, obj)
    : filterObj(cb, obj)
}
