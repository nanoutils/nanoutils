// TODO: to complete for objects with recursion
function getHashCode(object) { 
  return (typeof object === 'function' 
      ? object + '' 
      : JSON.stringify(object)
    )
    .split('')
    .reduce(function (hash, value) {
      var nHash = ((hash << 5) - hash) + value.charCodeAt(0)
      return nHash & nHash
    }, 0)
}

function has(bucket, element) {
  var stringified = JSON.stringify(element)
  return (bucket[getHashCode(element)] || []).some(function (e) {
    return e === stringified
  })
}

function add(bucket, element) {
  var hash = getHashCode(element)
  bucket[hash] = (bucket[hash] || []).concat(JSON.stringify(element))
  return bucket
}

function updateLocals(array, set, values) {
  array.forEach(function (element) {
    if (!has(set, element)) {
      add(set, element)
      values.push(element)
    }
  })
}

export default function _set(array) {
  var set = {}
  var values = []
  updateLocals(array, set, values)
  
  return {
    // chaining operations
    concat: function(array) {
      updateLocals(array, set, values)
      return this
    },
    // final operations
    has: has.bind(has, set),
    values: function() {
      return values.slice()
    }
  }
}
