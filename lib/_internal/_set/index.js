function getValueIndex(value, set, collection) {
  if (!(value in set)) return -2
  for (var i = 0; i < set[value].length; i++) {
    if (collection[set[value][i]] === value) return set[value][i]
  }
  return -1
}

function addValue(value, set, collection) {
  var index = getValueIndex(value, set, collection)
  if (index >= 0) return
  collection.push(value)

  if (index === -2) {
    set[value] = [collection.length - 1]
    return
  }
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
      return getValueIndex(value, set, collection) >= 0
    },
    get size() {
      return collection.length
    }
  }
}
