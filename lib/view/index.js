import curry2 from '../_internal/_curry2'

export default curry2(function view(lens, from) {
  return lens(from).get()
})
