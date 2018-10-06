import curry3 from '../_internal/_curry3'

export default curry3(function addIndex(iterator, reducer, array) {
  var index = 0
  return iterator(
    function(value) {
      return reducer(value, index++)
    },
    array
  )
})
