import negate from '../../cjs/negate'

test('negates number', () => {
  expect(negate(5)).toBe(-5)
  expect(negate(-5)).toBe(5)
})

test('works with strings', () => {
  expect(negate('-22.5e2')).toBe(22.5e2)
})
