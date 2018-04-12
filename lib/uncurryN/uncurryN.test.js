import uncurryN from "."

test("uncurries function with N args", () => {
  const sum = a => b => c => d => a + b + c + d
  expect(uncurryN(4, sum)(1, 2, 3, 4)).toBe(10)
})

test("does not accept extra args", () => {
  const sum = a => b => c => d => a + b + c + d
  expect(uncurryN(4, sum)(1, 2, 3, 4, 5)).toBe(10)
})
