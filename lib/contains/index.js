import eq from '../eq'
import curry from '../curry'

export default curry(function contains(data, list) {
  return list.some(function(item) {
    return eq(item, data)
  })
})
