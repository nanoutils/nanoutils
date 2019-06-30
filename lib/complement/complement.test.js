import T from '../../cjs/T'
import F from '../../cjs/F'
import complement from '../../cjs/complement'

test('should invert value', () => {
  expect(complement(T)()).toBe(false)
  expect(complement(F)()).toBe(true)
})

test('should pass arguments to callback', () => {
  expect(complement((a, b) => a || b)(true, true)).toBe(false)
  expect(complement((a, b) => a || b)(false, false)).toBe(true)
})
