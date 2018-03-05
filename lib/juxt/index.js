export default function juxt(cbs) {
  return function() {
    var args = arguments
    return cbs.map(function(cb) {
      return cb.apply(cb, args)
    })
  }
}
