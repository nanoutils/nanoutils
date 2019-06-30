import isInteger from '../../cjs/isInteger'

test('checks only integer numbers are passed', () => {
  expect(isInteger(NaN)).toBeFalsy()
  expect(isInteger(10.1)).toBeFalsy()
  expect(isInteger(10)).toBeTruthy()
  expect(isInteger(Infinity)).toBeFalsy()
  expect(isInteger(-Infinity)).toBeFalsy()
})

test('returns false for non-number values', () => {
  expect(isInteger('')).toBeFalsy()
  expect(isInteger([])).toBeFalsy()
  expect(isInteger([0])).toBeFalsy()
  expect(isInteger([0, 1])).toBeFalsy()
  expect(isInteger(false)).toBeFalsy()
})

test('returns false for Infinity and NaN', () => {
  expect(isInteger(Infinity)).toBeFalsy()
  expect(isInteger(-Infinity)).toBeFalsy()
  expect(isInteger(NaN)).toBeFalsy()
})
