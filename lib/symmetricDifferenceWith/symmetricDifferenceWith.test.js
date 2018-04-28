import symmetricDifferenceWith from '.'

test('compare values according to provided predicate', () => {
  const a = [{ a: 1 }, { a: 2 }]
  const b = [{ a: 1 }, { a: 3 }]
  const compare = (a, b) => a.a === b.a

  expect(symmetricDifferenceWith(compare, a, b)).toEqual([{ a: 2 }, { a: 3 }])
})
