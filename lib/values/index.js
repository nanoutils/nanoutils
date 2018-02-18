export default function values(obj) {
  return Object.keys(obj).reduce(function(acc, key) {
    return acc.concat(obj[key])
  }, [])
}
