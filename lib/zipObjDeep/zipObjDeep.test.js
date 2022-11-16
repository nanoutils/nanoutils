import zipObjDeep from '../../cjs/zipObjDeep'

test('creates object with paths from 1st array and values from 2nd', () => {
  expect(
    zipObjDeep(
      [
        ['a', 'b'],
        ['a', 'c', 0],
      ],
      [1, 2],
    ),
  ).toEqual({
    a: { b: 1, c: [2] },
  })
})

test('ignores extra values', () => {
  expect(zipObjDeep([['a'], ['b']], [1, 2, 3])).toEqual({ a: 1, b: 2 })
})

test('sets undefined for extra keys', () => {
  expect(zipObjDeep([['a'], ['b'], ['c']], [1, 2])).toEqual({
    a: 1,
    b: 2,
    c: undefined,
  })
})
