// import _reduce from '../_internal/_reduce'

// TODO: replace with productive one
// 1) should carry out one cycle which is not true here
//    - transducer(iterable) may slow down the tranducer approach
export default function transduce(transducer, reducer, initial, iterable) {
  var newReducer = transducer(reducer)
  var result = initial
  for (var i = 0; i < iterable.length; i++) {
    result = newReducer(result, iterable[i])
  }
  return result
  // return _reduce(
  //   newReducer,
  //   initial,
  //   iterable
  // )
}

// const takeT = n => reducer => (acc, v) => {
//   while (n > 0) {
//     acc = reducer(acc, v)
//     console.log(acc, reducer + '')
//     n--
//   }
//   return acc
// }
