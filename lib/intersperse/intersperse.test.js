import intersperse from '../../cjs/intersperse'

test('creates new list with separator interposed between list items', () => {
  const separator = 'a'
  const list = [1, 2, 3]
  expect(intersperse(separator, list)).toEqual([1, 'a', 2, 'a', 3])
})
