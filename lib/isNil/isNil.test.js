import isNil from '.'

test('returns true for undefined and null', () => {
  expect(isNil(null)).toBeTruthy()
  expect(isNil(undefined)).toBeTruthy()
})

test('returns false otherwise', () => {
  expect(isNil(true)).toBeFalsy()
  expect(isNil('test')).toBeFalsy()
  expect(isNil(5)).toBeFalsy()
  expect(isNil({})).toBeFalsy()
})
