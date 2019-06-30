import pluck from '../../cjs/pluck'

it('extracts values of an object by property', () => {
  expect(pluck('a', [{ a: 1 }, { a: 2 }])).toEqual([1, 2])
  expect(pluck('a')([{ a: 1 }, { a: 2 }])).toEqual([1, 2])
})

it('weirdly extracts values', () => {
  expect(pluck(['a'], [{ a: 1 }, { a: 2 }])).toEqual([1, 2])
})
