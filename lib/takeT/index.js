// TODO:  need to think through how to skip all the collection
//        instead of walking the whole one
export default (n) => (reducer) => {
  var m = n
  return (acc, v) => m-- > 0 ? reducer(acc, v) : acc
}
