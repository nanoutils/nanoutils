import eqBy from '../../cjs/eqBy'
import prop from '../../cjs/prop'

const eqFirst = eqBy((i) => i[0])

test('confirms that variables are equals with callback', () => {
  expect(eqFirst([1, 2], [1, 3])).toBeTruthy()
})

test('works for docs', () => {
  const danAbramov = { firstName: 'Dan', lastName: 'Abramov' }
  const danIvanov = { firstName: 'Dan', lastName: 'Ivanov' }

  expect(eqBy(prop('firstName'), danAbramov, danIvanov)).toBeTruthy()
  expect(eqBy(prop('lastName'), danAbramov, danIvanov)).toBeFalsy()
})
