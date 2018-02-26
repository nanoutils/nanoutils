export default function uniq(arr) {
  return arr.reduce(function(acc, item) {
    return acc.indexOf(item) === -1
      ? acc.concat(item)
      : acc
  }, [])
}
