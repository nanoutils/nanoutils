var zip = require('.')

test('returns array of 1st, 2nd, 3rd etc arguments', () => {
  expect(
    zip(
      ['a', 'b', 'c'],
      [1, 2, 3],
      [true, false, null],
      ['hello', 'world', 'foo'],
      ['troll']
    )
  ).toEqual([
    ['a', 1, true, 'hello', 'troll'],
    ['b', 2, false, 'world', undefined],
    ['c', 3, null, 'foo', undefined]
  ])
})
