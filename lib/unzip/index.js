import unzipWith from '../unzipWith'
import toArray from '../toArray'

export default unzipWith(function unzip() {
  return toArray(arguments)
})
