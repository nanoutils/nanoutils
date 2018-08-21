export default function dropLast(n, from) {
  if (n <= 0) {
    return from
  }
  return from.slice(0, -n)
}
