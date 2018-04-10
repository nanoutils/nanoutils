import empty from '.'

test('returns empty value of a given type', () => {
  const args = function() { return arguments }
  expect(empty('string')).toBe('')
  expect(empty(123)).toEqual(args())
  expect(empty(true)).toEqual(args())
  expect(empty([1, 2, 3])).toEqual([])
  expect(empty({ a: 1 })).toMatchObject({})
  expect(empty((x) => x / 2)).toEqual(args())
})

test('supports empty prop of Type', () => {
  Object.prototype.empty = 'hey' // eslint-disable-line
  const obj = { a: 1 }

  expect(empty(obj)).toBe('hey')
})
