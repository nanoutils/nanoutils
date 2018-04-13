function defaultCompare(a, b) {
  return a === b
}

function getValueIndex(value, set, collection, compare) {
  if (!(value in set)) return -2
  if (value + '' === 'NaN') return 0
  for (var i = 0; i < set[value].length; i++) {
    if (compare(collection[set[value][i]], value)) return set[value][i]
  }
  return -1
}

function addValue(value, set, collection, compare) {
  var index = getValueIndex(value, set, collection, compare)
  if (index >= 0) return
  collection.push(value)

  if (index === -2) {
    set[value] = [collection.length - 1]
    return
  }
  set[value].push(collection.length - 1)
}

function addValues(iterable, set, collection, compare) {
  for (var i = 0; i < iterable.length; i++) {
    addValue(iterable[i], set, collection, compare)
  }
}

export default function _set(iterable, compareFunc) {
  var compare = compareFunc || defaultCompare
  var set = {}
  var collection = []
  var list = Array.isArray(iterable) ? iterable : []

  addValues(list, set, collection, compare)

  return {
    add: function(value) {
      addValue(value, set, collection, compare)
      return this
    },
    concat: function(list) {
      addValues(list, set, collection, compare)
      return this
    },
    values: function() {
      return collection.slice(0)
    },
    has: function(value) {
      return getValueIndex(value, set, collection, compare) >= 0
    },
    get size() {
      return collection.length
    }
  }
}
