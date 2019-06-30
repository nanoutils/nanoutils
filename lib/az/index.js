export default function az(prop) {
  return (a, b) => prop(a).localeCompare(prop(b))
}
