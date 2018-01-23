export default function indexed(cb) {
  var idx = 0
  return function(val) {
    return cb(val, idx++)
  }
}
