import reduceRight from '../../cjs/reduceRight'

it('iterates from right to left', () => {
  const value = reduceRight((a, b) => a - b, 0, [1, 2, 3, 4])
  expect(value).toEqual(-2)
})

it('returns initial value if array is empty', () => {
  const value = reduceRight((a, b) => a - b, 0, [])
  expect(value).toEqual(0)
})
