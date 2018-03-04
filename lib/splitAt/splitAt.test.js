import splitAt from '.'

test('splits a given list at a given index', () => {
  expect(splitAt(1, [1, 2, 3])).toEqual([[1], [2, 3]])
})

test('works with string', () => {
  expect(splitAt(5, 'hello world')).toEqual(['hello', ' world'])
})

test('works with negative keys', () => {
  expect(splitAt(-1, 'foobar')).toEqual(['fooba', 'r'])
})
