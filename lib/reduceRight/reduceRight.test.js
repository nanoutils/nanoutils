import reduceRight from '.'

test('reduces from right', () => {
  expect(reduceRight((a, b) => a - b, 0, [1, 2, 3, 4])).toEqual(-2)
})
