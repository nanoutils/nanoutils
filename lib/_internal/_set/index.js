function hasValue(value, set, collection) {
  if (set.hasOwnProperty(value)) {
    for (var i = 0; i < set[value].length; i++) {
      if (collection[set[value][i]] === value) return true
    }
  }
  return false
}

function addValue(value, set, collection) {
  if (hasValue(value, set, collection)) return
  collection.push(value)

  if (!set.hasOwnProperty(value)) set[value] = []
  set[value].push(collection.length - 1)
}

function addValues(iterable, set, collection) {
  for (var i = 0; i < iterable.length; i++) {
    addValue(iterable[i], set, collection)
  }
}

export default function _set(iterable) {
  var set = {}
  var collection = []
  var list = Array.isArray(iterable) ? iterable : []

  addValues(list, set, collection)

  return {
    add: function(value) {
      addValue(value, set, collection)
      return this
    },
    concat: function(list) {
      addValues(list, set, collection)
      return this
    },
    values: function() {
      return collection.slice(0)
    },
    has: function(value) {
      return hasValue(value, set, collection)
    },
    get size() {
      return collection.length
    }
  }
}
