import unzipWith from '../unzipWith'
import toArray from '../toArray'

export default unzipWith(function(arr, i) {
  return toArray(arguments).reduce(function(arr, i) {
    return arr.concat(i)
  }, [])
})
