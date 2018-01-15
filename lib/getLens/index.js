import curry from '../curry'

export default curry(function getLens(lens, from) {
  return lens(from).get()
})
