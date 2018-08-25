import unzip from '.'

test('returns pre-zip array', () => {
  expect(
    unzip([['a', 1, true], ['b', 2, false], ['c', 3, null, 'troll']])
  ).toEqual([
    ['a', 'b', 'c'],
    [1, 2, 3],
    [true, false, null],
    [undefined, undefined, 'troll']
  ])
})
