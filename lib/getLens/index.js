import curry2 from '../_internal/_curry2'

export default curry2(function getLens(lens, from) {
  return lens(from).get()
})
