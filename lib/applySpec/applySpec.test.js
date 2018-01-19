var applySpec = require('.')

test('returns object with applied function', () => {
  const res = applySpec({
    sum: (a, b) => a + b,
    nested: {
      mul: (a, b) => a * b
    }
  })(2, 4)
  expect(res).toEqual({
    sum: 6,
    nested: { mul: 8 }
  })
})
