import difference from '../../cjs/difference'

test("returns elements from 1st array that doesn't contain in 2nd", () => {
  expect(difference([1, 2, 3, 4], [3, 4])).toEqual([1, 2])
  expect(difference([{ a: 1 }, { c: 2 }], [{ c: 2 }, { b: 2 }])).toEqual([
    { a: 1 }
  ])
})
