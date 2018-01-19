var partialRight = require('.')

test('partial applies', () => {
  const greet = (salutation, title, firstName, lastName) =>
    salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!'

  const greetMsJaneJones = partialRight(greet, ['Ms.', 'Jane', 'Jones'])

  expect(greetMsJaneJones('Hello')).toBe('Hello, Ms. Jane Jones!')
})
