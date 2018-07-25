export default function flatten(arr) {
  var res = []

  function each(v) {
    if (Array.isArray(v)) {
      var i = 0
      while (i < v.length) {
        each(v[i])
        i += 1
      }
      return
    }
    res.push(v)
  }

  each(arr)

  return res
}
