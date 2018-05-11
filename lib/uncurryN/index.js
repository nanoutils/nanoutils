import _curry2 from '../_internal/_curry2'

export default _curry2(function uncurryN(n, cb) {
  return function curried() {
    var res = cb
    for (var i = 0; i < n; i++) {
      res = res(arguments[i])
    }
    return res
  }
})
