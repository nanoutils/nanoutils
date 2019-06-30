import partialRight from '../../cjs/partialRight'

it('applies arguments to a function', () => {
  const greet = (salutation, title, firstName, lastName) =>
    salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!'

  const greetMsJaneJones = partialRight(greet, ['Ms.', 'Jane', 'Jones'])

  expect(greetMsJaneJones('Hello')).toBe('Hello, Ms. Jane Jones!')
})

it('allows to iterate over first parameters', () => {
  const euroChange = (change, now) => now + change
  const calculateTomorrowEuro = partialRight(euroChange, [78.66])
  const probabilities = [
    { p: 50, change: 0.34 },
    { p: 25, change: -0.33 },
    { p: 15, change: 0.49 },
    { p: 10, change: -0.66 }
  ]
  let tomorrowEuro = probabilities.reduce(
    (result, { p, change }) => result + p * calculateTomorrowEuro(change) / 100,
    0
  )

  expect(tomorrowEuro).toBe(78.755)
})
