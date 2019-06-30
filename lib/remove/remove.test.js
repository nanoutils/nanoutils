import remove from '../../cjs/remove'

it('removes values from start index', () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  expect(remove(4, 3, array)).toEqual([1, 2, 3, 4, 8, 9, 10])
})

it('does not mutate original array, returns a new copy', () => {
  const array = [1, 2, 3]
  const result = remove(1, 1, array)

  expect(result).toEqual([1, 3])
  expect(result !== array).toBeTruthy()
})
