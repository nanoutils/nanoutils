import is from '../../cjs/is'

test('checks if value is instance of object', () => {
  expect(is(Number)(1)).toBeTruthy()
})

test('checks just equality of null and undefined values', () => {
  expect(is(null)(null)).toBeTruthy()
  expect(is(undefined)(undefined)).toBeTruthy()
  expect(is(null)(undefined)).toBeFalsy()
  expect(is(undefined)(null)).toBeFalsy()
})
