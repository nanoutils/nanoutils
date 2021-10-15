import isEmpty from '../../cjs/isEmpty'

test('returns "true" if value is empty, otherwise "false"', () => {
  expect(isEmpty([1, 2, 3])).toBeFalsy()
  expect(isEmpty([])).toBeTruthy()
  expect(isEmpty('')).toBeTruthy()
  expect(isEmpty(null)).toBeFalsy()
  expect(isEmpty({})).toBeTruthy()
  expect(isEmpty(undefined)).toBeFalsy()
  expect(isEmpty(false)).toBeFalsy()
  expect(isEmpty(true)).toBeFalsy()
  expect(isEmpty(0)).toBeFalsy()
  expect(isEmpty(function () {})).toBeFalsy()
  expect(isEmpty(NaN)).toBeFalsy()
})
