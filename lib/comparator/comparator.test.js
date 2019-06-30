import comparator from '../../cjs/comparator'

test('should return comparator for .sort method', () => {
  var gt = comparator((a, b) => a > b)
  expect(gt(5, 4)).toBe(-1)
  expect(gt(4, 5)).toBe(1)
  expect(gt(4, 4)).toBe(0)
})
