export default function identical(first, second) {
  if (first + '' === 'NaN') return first + '' === second + ''
  if (first === 0) return 1 / first === 1 / second
  return first === second
}
