import juxt from '.'

test('applies a list of functions to a list of values', () => {
  const range = juxt([Math.min, Math.max])
  expect(range(3, 4, 9, -3)).toEqual([-3, 9])
})
