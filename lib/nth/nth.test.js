import nth from '.'

test('returns the nth element of the given list or string', () => {
  expect(nth(2, 'abc')).toBe('c')
  expect(nth(2, [1, 2, 3])).toBe(3)
})

test('returns empty string or undefined for string and array accordingly if index more than item length', () => {
  expect(nth(3, 'abc')).toBe('')
  expect(nth(3, [1, 2, 3])).toBeUndefined()
})

test('if index is negative, length + n item returns', () => {
  expect(nth(-1, [1, 2, 3])).toBe(3)
})
