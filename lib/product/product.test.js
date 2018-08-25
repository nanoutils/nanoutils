import product from '.'

test('multiplies all numbers', () => {
  expect(product([1, 2, 3, -4])).toEqual(-24)
})
