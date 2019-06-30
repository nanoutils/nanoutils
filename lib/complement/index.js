export default function complement(cb) {
  return (...args) => !cb(...args)
}
