import isInteger from '.'

test('checks only integer numbers are passed', () => {
  expect(isInteger(NaN)).toBeFalsy()
  expect(isInteger(10.1)).toBeFalsy()
  expect(isInteger(10)).toBeTruthy()
  expect(isInteger(Infinity)).toBeFalsy()
  expect(isInteger(-Infinity)).toBeFalsy()
})
