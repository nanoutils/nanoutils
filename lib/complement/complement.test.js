import T from '../T'
import F from '../F'
import not from '.'

test('should invert value', () => {
  expect(not(T)()).toBe(false)
  expect(not(F)()).toBe(true)
})

test('should pass arguments to callback', () => {
  expect(not((a, b) => a || b)(true, true)).toBe(false)
  expect(not((a, b) => a || b)(false, false)).toBe(true)
})
