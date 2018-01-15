import curry from '../curry'
import toArray from '../toArray'

export default curry(function takeWhile(cb, arr) {
  return !arr.length || !cb(arr[0])
    ? []
    : [arr[0]].concat(takeWhile(cb, toArray(arr).slice(1)))
})
