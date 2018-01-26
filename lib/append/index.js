import curryN from '../curryN';

export default curryN(2, function append(v, arr) {
  return arr.concat([v])
})