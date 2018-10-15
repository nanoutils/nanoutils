export default function dropLast(size, arrayOrString) {
  if (size <= 0) {
    return arrayOrString
  }
  return arrayOrString.slice(0, -size)
}
