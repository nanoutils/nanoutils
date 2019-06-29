export default function dropLast(n, from) {
  return n <= 0 ? from : from.slice(0, -n)
}
