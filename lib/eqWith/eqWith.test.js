import eqWith from '../../cjs/eqWith'

const eqFirst = eqWith((a, b) => a[0] === b[0])

test('confirms that variables are equals with callback', () => {
  expect(eqFirst([1, 2], [1, 3])).toBeTruthy()
})

test('works for docs', () => {
  const lengthComparison = (arr1, arr2) => arr1.length === arr2.length
  const eqWithLength = eqWith(lengthComparison)

  expect(eqWithLength([1, 2], [2, 3])).toBeTruthy()
  expect(eqWithLength([1, 2], [2, 3, 4])).toBeFalsy()
})
