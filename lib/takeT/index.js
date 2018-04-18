// TODO:  need to think through how to skip all the collection
//        instead of walking the whole one
export default function takeT(n) {
  return function(reducer) {
    var m = n
    return function(acc, v) {
      if (m-- > 0) {
        return reducer(acc, v)
      }
      return acc
    }
  }
}
