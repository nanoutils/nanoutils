var cond = require('.')

test('returns value from callback for matched condition', () => {
  const val = cond([
    [i => i === 3, i => 3],
    [i => i > 1, i => 2],
    [i => true, i => 1]
  ])
  expect(val(1)).toBe(1)
  expect(val(2)).toBe(2)
  expect(val(3)).toBe(3)
})

test('returns undefined when no one condition is true', () => {
  const val = cond([[i => i === 3, i => 3]])
  expect(val(4)).toBe(undefined)
})

test('returns undefined when no conditions passes', () => {
  const val = cond([])
  expect(val(4)).toBe(undefined)
})
