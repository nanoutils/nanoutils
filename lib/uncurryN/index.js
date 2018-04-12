import _curry2 from "../_internal/_curry2"

export default _curry2(function uncurryN(n, cb) {
  return function curried() {
    var res = cb
    for (var i in arguments) {
      if (i >= n) return res
      res = res(arguments[i])
    }
    return arguments.length < n ? uncurryN(n - arguments.length, res) : res
  }
})
