import range from '.'

test('creates an array with numbers from 1st to 2nd (excluding last)', () => {
  expect(range(1, 5)).toEqual([1, 2, 3, 4])
  expect(range(50, 53)).toEqual([50, 51, 52])
})
