import differenceWith from '../../cjs/differenceWith'

test("returns elements from 1st array that doesn't contain in 2nd", () => {
  const diffA = differenceWith((a, b) => a.a === b.a)
  const val = diffA([{ a: 1 }, { a: 2 }, { a: 3 }], [{ a: 3 }, { a: 4 }])

  expect(val).toEqual([{ a: 1 }, { a: 2 }])
})

test('works for docs', () => {
  const withPropA = differenceWith((obj1, obj2) => obj1.a === obj2.a)

  expect(withPropA([{ a: 1, b: 2 }], [{ a: 1 }])).toEqual([])
  expect(withPropA([{ a: 1, b: 2 }], [{ a: 2 }])).toEqual([{ a: 1, b: 2 }])
})
