import curry3 from '../_internal/_curry3'

export default curry3(function remove(start, count, list) {
  var result = list.slice()
  result.splice(start, count)
  return result
})
