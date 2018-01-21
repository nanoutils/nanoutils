import curryN from '../curryN'

export default curryN(2, function is(constructor, val) {
  return val !== null && val !== undefined
    ? val.constructor === constructor
    : val === constructor
})
