import curryN from '../curryN';

export default curryN(2, function map(f, arr) {
  return arr.map(f);
})