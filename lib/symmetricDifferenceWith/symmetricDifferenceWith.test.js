import symmetricDifferenceWith from '.'

it('compares values according to provided predicate', () => {
  const first = [{ a: 1, b: 3 }, { a: 2 }]
  const second = [{ a: 1, b: 2 }, { a: 3 }]
  const third = [{ a: 3, b: 4 }, { a: 4 }]
  const compare = (first, second) => first.a === second.a

  expect(symmetricDifferenceWith(compare, first, second)).toEqual([{ a: 2 }, { a: 3 }])
  expect(symmetricDifferenceWith(compare, first, third)).toEqual([...first, ...third])
})
