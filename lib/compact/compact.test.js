var compact = require('.')

test('removes all falsey values', () => {
  expect(compact([1, 0, 2, false, 3, null, 4, NaN, '5', '', 6, undefined])).toEqual([1, 2, 3, 4, '5', 6]);
})

test('returns argument itself if it\'s not array or undefined', () => {
  const empty = function(){};
  expect(compact('string')).toEqual('string');
  expect(compact(123)).toEqual(123);
  expect(compact(empty)).toEqual(empty);
  expect(compact()).toEqual(undefined);
})
