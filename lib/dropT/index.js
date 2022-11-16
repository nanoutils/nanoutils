export default (n) => (reducer) => {
  var m = n
  return (acc, v) => (m-- > 0 ? acc : reducer(acc, v))
}
