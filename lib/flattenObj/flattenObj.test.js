import flattenObj from '../../cjs/flattenObj'

test('converts nested object to flat object', () => {
  const val = flattenObj({ a: 1, b: { c: 3 }, d: [{ a: 2 }] })
  expect(val).toEqual({ a: 1, 'b.c': 3, d: [{ a: 2 }] })
})
