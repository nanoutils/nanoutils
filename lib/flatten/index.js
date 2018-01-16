export default function flatten(arr) {
  return Array.isArray(arr) ? Array.prototype.concat.apply([], arr) : []
}
