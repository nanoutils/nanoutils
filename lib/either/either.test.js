import either from '../../cjs/either'

test('confirms that some of functions returns true', () => {
  const isInIntervals = either(
    (i) => i < 15 && i > 5,
    (i) => i > 10 && i < 20,
  )

  expect(isInIntervals(13)).toBeTruthy()
  expect(isInIntervals(17)).toBeTruthy()
  expect(isInIntervals(6)).toBeTruthy()
  expect(isInIntervals(-2)).toBeFalsy()
})

test('works for docs', () => {
  const hasNumber = (...args) => args.some((arg) => typeof arg === 'number')
  const hasString = (...args) => args.some((arg) => typeof arg === 'string')

  const hasNumberOrString = either(hasNumber, hasString)

  expect(hasNumberOrString(1, '2', 3, '4')).toBeTruthy()
  expect(hasNumberOrString(1, 2, 3, 4)).toBeTruthy()
  expect(hasNumberOrString('1', '2', '3')).toBeTruthy()
  expect(hasNumberOrString(false, true)).toBeFalsy()
})
