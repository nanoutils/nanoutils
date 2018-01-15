import curry from '../curry'
import toArray from '../toArray'

export default curry(function dropRightWhile(cb, arr) {
  return !arr.length || !cb(arr[arr.length - 1])
    ? arr
    : dropRightWhile(cb, toArray(arr).slice(0, -1))
})
