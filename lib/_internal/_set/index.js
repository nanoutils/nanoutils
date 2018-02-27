// TODO: to complete for objects with recursion
function getHashCode(object) {
  return JSON.stringify(object)
    .split('')
    .reduce(function (hash, value) {
      return hash & ((hash << 5) - hash) + value.charCodeAt(0)
    }, 0)
}

export default function _set(array) {
  var set = array.reduce(function (bucket, element) {
    var hash = getHashCode(element)
    bucket[hash] = (bucket[hash] || []).concat(JSON.stringify(element))
    return bucket
  }, {})
  return {
    has: function (element) {
      var stringified = JSON.stringify(element)
      return (set[getHashCode(element)] || []).some(function (e) {
        return e === stringified
      })
    }
  }
}
