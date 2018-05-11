export default function za(prop) {
  return function(a, b) {
    return -prop(a).localeCompare(prop(b))
  }
}
