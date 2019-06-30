import reduce from '../../cjs/reduce'

it('reduces array', () => {
  const val = reduce((res, cur) => res + cur, 0, [1, 2, 3, 4, 5])
  expect(val).toBe(15)
})

it('reduces string', () => {
  const val = reduce((res, cur) => cur + res, '', 'abcde')
  expect(val).toBe('edcba')
})

it('returns initial value for empty array', () => {
  const initialValue = 'lol'
  const val = reduce((res, cur) => cur + res, initialValue, [])
  expect(val).toBe(initialValue)
})

it('throws error when non-iterable data is passed', () => {
  const val = () => reduce((res, cur) => cur + res, 'lol', 255)
  expect(val).toThrow(new TypeError('Argument should be iterable'))
})
