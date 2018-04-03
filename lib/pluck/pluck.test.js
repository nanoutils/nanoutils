import pluck from '.'

test('it doesn\'t extract values of an object by keys if key is not an array', () => {
  expect(() => pluck('a', [{ a: 1 }, { a: 2 }])).toThrowError('Keys should be an array')
})

test('it extracts values of an object by keys', () => {
  expect(pluck(['a'], [{ a: 1 }, { a: 2 }])).toEqual([1, 2])
  expect(pluck(['a'])([{ a: 1 }, { a: 2 }])).toEqual([1, 2])
})
