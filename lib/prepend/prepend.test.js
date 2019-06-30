import prepend from '../../cjs/prepend'

it('returns a list with given element in front and followed by other list items', () => {
  expect(prepend('a', [1, 2, 3])).toEqual(['a', 1, 2, 3])
})

test('provided list is not mutating', () => {
  const list = [1, 2, 3]
  const result = prepend('a', list)

  expect(list).toEqual([1, 2, 3])
  expect(list !== result).toBeTruthy()
})
