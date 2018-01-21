import curryN from '../curryN'

export default curryN(2, function getLens(lens, from) {
  return lens(from).get()
})
