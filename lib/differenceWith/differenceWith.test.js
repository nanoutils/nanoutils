var differenceWith = require('.')

test("returns elements from 1st array that doesn't contain in 2nd", () => {
  var diffA = differenceWith((a, b) => a.a === b.a)
  var val = diffA([{ a: 1 }, { a: 2 }, { a: 3 }], [{ a: 3 }, { a: 4 }])
  expect(val).toEqual([{ a: 1 }, { a: 2 }])
})
