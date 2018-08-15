import curry2 from '../_internal/_curry2'

export default curry2(function match(regex, string) {
  return string.match(regex) || []
})
