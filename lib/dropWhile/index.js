import curry from '../curry'
import toArray from '../toArray'

export default curry(function dropWhile(cb, arr) {
  return !arr.length || !cb(arr[0]) ? arr : dropWhile(cb, toArray(arr).slice(1))
})
