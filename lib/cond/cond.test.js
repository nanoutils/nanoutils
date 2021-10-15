import cond from '../../cjs/cond'

test('returns value from callback for matched condition', () => {
  const val = cond([
    [(value) => value === 3, () => 3],
    [(value) => value > 1, () => 2],
    [() => true, () => 1],
  ])
  expect(val(1)).toBe(1)
  expect(val(2)).toBe(2)
  expect(val(3)).toBe(3)
})

test('returns undefined when no one condition is true', () => {
  const val = cond([[(i) => i === 3, () => 3]])
  expect(val(4)).toBe(undefined)
})

test('returns undefined when no conditions passes', () => {
  const val = cond([])
  expect(val(4)).toBe(undefined)
})
