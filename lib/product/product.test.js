import product from '../../cjs/product'

it('returns 1 if array is empty', () => {
  expect(product([])).toBe(1)
})

it('multiplies all numbers', () => {
  expect(product([1, 2, 3, -4])).toBe(-24)
})
