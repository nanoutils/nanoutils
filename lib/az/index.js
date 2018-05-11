export default function az(prop) {
  return function(a, b) {
    return prop(a).localeCompare(prop(b))
  }
}
