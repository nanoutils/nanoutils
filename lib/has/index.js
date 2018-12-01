import curry2 from '../_internal/_curry2'

export default curry2(function has(key, object) {
  return object.hasOwnProperty(key)
})
