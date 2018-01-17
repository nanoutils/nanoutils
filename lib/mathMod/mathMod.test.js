var mathMod = require('.')

test('behaves like math modulo operator, unlike the %', () => {
  expect(mathMod(-17, 5)).toBe(3)
  expect(mathMod(17, 5)).toBe(2)
})

test('returns NaN if 2rd argument < 1', () => {
  expect(mathMod(17, -5)).toBe(NaN)
  expect(mathMod(17, 0)).toBe(NaN)
})

test('returns NaN if any of args is not integer', () => {
  expect(mathMod(17.2, 5)).toBe(NaN)
  expect(mathMod(17, 5.3)).toBe(NaN)
})
