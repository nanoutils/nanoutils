export default function dropT(n) {
  return reducer => {
    var m = n
    return (acc, v) => m-- > 0 ? acc : reducer(acc, v)
  }
}
