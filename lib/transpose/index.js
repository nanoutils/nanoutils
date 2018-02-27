export default function transpose(list) {
  var maxLength = list.reduce(function(length, arr) {
    return Math.max(length, arr.length)
  }, 0)

  return new Array(maxLength).fill(null).map(function(item, i) {
    return list.reduce(function(acc, listItem) {
      return listItem[i] === undefined
        ? acc
        : acc.concat(listItem[i])
    }, [])
  })
}
