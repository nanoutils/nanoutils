import fill from '.'

test('fills array with value', () => {
  const arr = [1, 2, 3, 4, 5]
  expect(fill('a')(arr)).toEqual(['a', 'a', 'a', 'a', 'a'])
})

test('return array itself if value is undefined', () => {
  const arr = [1, 2, 3, 4, 5]
  expect(fill(undefined)(arr)).toEqual(arr)
})

test('fills array with value from start index', () => {
  const arr = [1, 2, 3, 4, 5]
  expect(fill('a', 2)(arr)).toEqual([1, 2, 'a', 'a', 'a'])
})

test('fills array with value from start to end indexes', () => {
  const arr = [1, 2, 3, 4, 5]
  expect(fill('*', 2, 4)(arr)).toEqual([1, 2, '*', '*', 5])
})
