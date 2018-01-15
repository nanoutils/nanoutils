import curry from '../curry'

export default curry(function is(constructor, val) {
  return val !== null && val !== undefined
    ? val.constructor === constructor
    : val === constructor
})
