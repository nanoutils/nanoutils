export default function flip(fn) {
  return (...args) => fn(...args.reverse())
}
