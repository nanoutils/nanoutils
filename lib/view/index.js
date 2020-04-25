import curry2 from '../_internal/_curry2'

export default curry2((lens, from) => lens(from).get())
