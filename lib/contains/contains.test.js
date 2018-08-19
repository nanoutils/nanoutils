import contains from '.'

test('returns true if some of array items is equal with specified value', () => {
  var containsNull = contains(null)
  expect(containsNull([1, 2, null, 4])).toBeTruthy()
})

test('returns false otherwise', () => {
  var containsLOL = contains('lol')
  expect(containsLOL(['345', null, { a: 2 }])).toBeFalsy()
})

test('works on objects', () => {
  var containsObj = contains({ a: 2, b: ['lol'] })
  expect(containsObj(['asdf', { a: 2, b: ['lol'] }])).toBeTruthy()
  expect(containsObj(['asdf'])).toBeFalsy()
})
