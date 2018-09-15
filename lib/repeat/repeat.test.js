import repeat from '.'

test('creates an array of N values', () => {
  expect(repeat('hi', 5)).toEqual(['hi', 'hi', 'hi', 'hi', 'hi'])
})

test('all values are equal', () => {
  var a = repeat({}, 5)
  expect(a[0] === a[1]).toBeTruthy()
})

test('returns an empty array is value is 0', () => {
  expect(repeat(15, 0)).toEqual([])
})

test('returns an empty array if value is negative', () => {
  expect(repeat(1, -10)).toEqual([])
})
