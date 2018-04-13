var uniq = require('.')

test('returns new array with duplicates filtered', () => {
  const func = function() { return a }
  const a = [1, 2, 3, 4, 1, 2, func, func, '1', { a: 1 }, { a: 1 }]

  expect(uniq(a)).toEqual([1, 2, 3, 4, func, '1', { a: 1 }])
})
