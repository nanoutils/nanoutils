import pluck from '.'

test('it doesn\'t extract values of an object by keys if key is not a string or a number', () => {
  expect(() => pluck(['a'], [{ a: 1 }, { a: 2 }])).toThrowError('Property should be either string or number')
})

test('it extracts values of an object by property', () => {
  expect(pluck('a', [{ a: 1 }, { a: 2 }])).toEqual([1, 2])
  expect(pluck('a')([{ a: 1 }, { a: 2 }])).toEqual([1, 2])
})
