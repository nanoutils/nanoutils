import fromPairs from '../../cjs/fromPairs'

test('returns object created from list key-value pairs', () => {
  expect(
    fromPairs([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]),
  ).toMatchObject({ a: 1, b: 2, c: 3 })
})

test('the same rightmost key overwrites value', () => {
  expect(
    fromPairs([
      ['a', 1],
      ['b', 2],
      ['a', 3],
    ]),
  ).toMatchObject({ a: 3, b: 2 })
})

test('returns empty object if provided empty array', () => {
  expect(fromPairs([])).toMatchObject({})
})
