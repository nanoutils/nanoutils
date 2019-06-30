import propEq from '../../cjs/propEq'

it('returns true if value equals to a speicifed value', () => {
  const a = { a: 1, b: { c: 3 } }
  expect(propEq('b', { c: 3 }, a)).toBeTruthy()
})

it('returns false otherwise', () => {
  const b = { a: 2, b: { c: 4 } }
  expect(propEq('b', { c: 3 }, b)).toBeFalsy()
})
