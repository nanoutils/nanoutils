import identical from '.'

test('checks if two plain items are equals', () => {
  expect(identical(1, 1)).toBeTruthy()
  expect(identical('a', 'a')).toBeTruthy()
  expect(identical(true, true)).toBeTruthy()
  expect(identical(undefined, undefined)).toBeTruthy()
  expect(identical(undefined, null)).toBeFalsy()
  expect(identical(1, '1')).toBeFalsy()
})

test('check equality by reference for structured items', () => {
  const obj1 = {}

  expect(identical(obj1, obj1)).toBeTruthy()
  expect(identical({}, {})).toBeFalsy()
  expect(identical([], [])).toBeFalsy()
})

test('NaN should be equals to NaN', () => {
  expect(identical(NaN, NaN)).toBeTruthy()
})

test('0 and -0 should not be equal', () => {
  expect(identical(-0, 0)).toBeFalsy()
})
