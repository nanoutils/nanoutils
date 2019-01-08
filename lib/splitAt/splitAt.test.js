import splitAt from '.'

it('splits a given array at a specified index', () => {
  expect(splitAt(1, [1, 2, 3])).toEqual([[1], [2, 3]])
})

it('works with string', () => {
  expect(splitAt(5, 'hello world')).toEqual(['hello', ' world'])
})

it('works with negative index', () => {
  expect(splitAt(-1, 'foobar')).toEqual(['fooba', 'r'])
})
