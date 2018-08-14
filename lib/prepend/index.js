import curry2 from '../_internal/_curry2'

export default curry2(function prepend(elem, list) {
  return [elem].concat(list)
})
