import toArray from '../toArray'
import zipWith from '../zipWith'

export default zipWith(function(prev, cur) {
  return toArray(arguments).reduce(function(arr, i) {
    return arr.concat(i)
  }, [])
})
