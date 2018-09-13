import fill from '.'

test('fills array with specified value', () => {
  const arr = [1, 2, 3, 4, 5]
  expect(fill('a')(arr)).toEqual(['a', 'a', 'a', 'a', 'a'])
})

test('returns array itself if value is undefined', () => {
  const arr = [1, 2, 3, 4, 5]
  expect(fill(undefined)(arr)).toEqual(arr)
})

test('fills an array with value from a specified start', () => {
  const arr = [1, 2, 3, 4, 5]
  expect(fill('a', 2)(arr)).toEqual([1, 2, 'a', 'a', 'a'])
})

test('fills array with specified value from specified start to end', () => {
  const arr = [1, 2, 3, 4, 5]
  expect(fill('*', 2, 4)(arr)).toEqual([1, 2, '*', '*', 5])
  expect(fill('*', 2, -1)(arr)).toEqual([1, 2, '*', '*', 5])
})

test('returns a new array', () => {
  const arr = [1, 2, 3, 4, 5]
  expect(fill()(arr)).not.toBe(arr)
  expect(fill(undefined)(arr)).not.toBe(arr)
  expect(fill('*')(arr)).not.toBe(arr)
  expect(fill('*', 2)(arr)).not.toBe(arr)
  expect(fill('*', 2, 5)(arr)).not.toBe(arr)
})
