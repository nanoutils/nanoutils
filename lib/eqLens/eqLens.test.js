import lens from '../lens'
import eqLens from '.'

test('returns true if value from lens is equal', () => {
  const lensA = lens(i => i.a)
  expect(eqLens(lensA, 2, { a: 2 })).toBeTruthy()
})

test('returns false otherwise', () => {
  const lensA = lens(i => i.a)
  expect(eqLens(lensA, 2, {})).toBeFalsy()
})
