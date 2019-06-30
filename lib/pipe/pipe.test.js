import pipe from '../../cjs/pipe'
import not from '../../cjs/not'

function plus1(a) {
  return a + 1
}
function x2(a) {
  return a * 2
}

it('accepts functions from left to right', () => {
  expect(pipe(plus1, x2)(1)).toBe(4)
})

it('checks if a value is not an array', () => {
  const isNotArray = pipe(Array.isArray, not)

  expect(isNotArray(1)).toBeTruthy()
  expect(isNotArray([1, 2, 3])).toBeFalsy()
})
