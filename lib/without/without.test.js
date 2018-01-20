var without = require('.')

test('returns a new list without values in the first argument', () => {
  var val = without([1, 2], [1, 2, 1, 3, 4])
  expect(val).toEqual([3, 4])
})
