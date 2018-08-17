var compact = require('.')

test('removes all falsy values', () => {
  expect(
    compact([1, 0, 2, false, 3, null, 4, NaN, '5', '', 6, undefined])
  ).toEqual([1, 2, 3, 4, '5', 6])
})

test("returns an empty array if it's not array or undefined", () => {
  const empty = function() {}
  expect(compact('string')).toEqual([])
  expect(compact(123)).toEqual([])
  expect(compact(empty)).toEqual([])
  expect(compact()).toEqual([])
})
