import nuTest from '.'

it('checks if string corresponds to RegExp', () => {
  const regexp1 = /foo*/
  const regexp2 = /foo*/g

  const text = 'football player'

  expect(nuTest(regexp1, text)).toBeTruthy()
  expect(nuTest(regexp1, text)).toBeTruthy()
  expect(nuTest(regexp2, text)).toBeTruthy()
  expect(nuTest(regexp2, text)).toBeFalsy()
})
