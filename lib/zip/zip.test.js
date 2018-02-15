var zip = require('.')

test('returns array of 1st, 2nd, 3rd etc arguments', () => {
  expect(zip(['a', 'b', 'c'])([1, 2, 3])).toEqual([['a', 1], ['b', 2], ['c', 3]])
  expect(zip(['a', 'b', 'c'], [1, 2, 3])).toEqual([['a', 1], ['b', 2], ['c', 3]])
})
