import compose from '.'
import not from '../not'

function plus1(a) {
  return a + 1
}
function x2(a) {
  return a * 2
}

test('accepts functions from left to right', () => {
  expect(compose(plus1, x2)(1)).toBe(3)
})

test('checks if a value is not an array', () => {
  const isNotArray = compose(not, Array.isArray)

  expect(isNotArray(1)).toBeTruthy()
  expect(isNotArray([1, 2, 3])).toBeFalsy()
})
