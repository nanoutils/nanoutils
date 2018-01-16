// import curry from '../curry'
// import toArray from '../toArray'

// export default curry(function takeRightWhile(cb, arr) {
//   return !arr.length || !cb(arr[arr.length - 1])
//     ? []
//     : takeRightWhile(cb, toArray(arr).slice(0, -1)).concat([
//         arr[arr.length - 1]
//       ])
// })

import curry from '../curry'
import toArray from '../toArray'

export default curry(function takeRightWhile(cb, arr) {
  var len = 0
  while (arr.length && cb(arr[arr.length - len - 1])) {
    len++
  }
  return toArray(arr).slice(-len)
})
