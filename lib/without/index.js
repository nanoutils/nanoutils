import curry2 from '../_internal/_curry2'

export default curry2((a, b) => b.filter(item => !a.includes(item)))
