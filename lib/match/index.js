import curry2 from '../_internal/_curry2'

export default curry2((regex, string) => string.match(regex) || [])
