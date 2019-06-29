export default function za(prop) {
  return (a, b) => -prop(a).localeCompare(prop(b))
}
