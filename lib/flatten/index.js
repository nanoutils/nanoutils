export default (arr) => {
  var res = []

  var each = (v) => {
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
