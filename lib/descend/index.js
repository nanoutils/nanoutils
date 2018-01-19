export default function descend(cb) {
  return function(a, b) {
    var cbA = cb(a)
    var cbB = cb(b)
    return cbA > cbB ? -1 : cbA < cbB ? 1 : 0
  }
}
