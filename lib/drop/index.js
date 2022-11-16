import curry2 from '../_internal/_curry2'

export default curry2((n, from) => (n <= 0 ? from : from.slice(n)))
