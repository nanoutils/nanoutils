import mathMod from '.'

it('behaves like math modulo operator, unlike the %', () => {
  expect(mathMod(-17, 5)).toBe(3)
  expect(mathMod(17, 5)).toBe(2)
})

it('returns NaN if 2rd argument < 1', () => {
  expect(mathMod(17, -5)).toBeNaN()
  expect(mathMod(17, 0)).toBeNaN()
})

it('returns NaN if any of args is not integer', () => {
  expect(mathMod(17.2, 5)).toBeNaN()
  expect(mathMod(17, 5.3)).toBeNaN()
})
