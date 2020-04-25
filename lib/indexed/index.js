export default (cb) => {
  var idx = 0
  return val => cb(val, idx++)
}
