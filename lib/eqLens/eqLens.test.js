import lens from '../../cjs/lens'
import eqLens from '../../cjs/eqLens'

test('returns true if value from lens is equal', () => {
  const lensA = lens(i => i.a)
  expect(eqLens(lensA, 2, { a: 2 })).toBeTruthy()
})

test('returns false otherwise', () => {
  const lensA = lens(i => i.a)
  expect(eqLens(lensA, 2, {})).toBeFalsy()
})

test('works for docs', () => {
  const lastName = 'Abramov'
  const danAbramov = { firstName: 'Dan', lastName: 'Abramov' }
  const danIvanov = { firstName: 'Dan', lastName: 'Ivanov' }
  const lastNameLens = lens(person => person.lastName)

  expect(eqLens(lastNameLens, lastName, danAbramov)).toBeTruthy()
  expect(eqLens(lastNameLens, lastName, danIvanov)).toBeFalsy()
})
