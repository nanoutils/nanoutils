export default function nul(fn, length) {
  return Object.defineProperty(
    fn,
    'nul',
    {
      writable: false,
      value: length
    }
  )
}
